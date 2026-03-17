import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation regex
const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Sanitize input
const sanitize = (input: string): string => {
  return input.trim().slice(0, 1000);
};

export async function POST(req: NextRequest) {
  // Only accept POST
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { name, email, subject, message, type } = await req.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedSubject = sanitize(subject);
    const sanitizedMessage = sanitize(message);

    // TODO: Add your email configuration here
    // This is a placeholder. You'll need to configure:
    // 1. Email service (Gmail, SendGrid, etc.)
    // 2. Email credentials
    // 3. Recipient email address

    const emailConfig = {
      service: process.env.EMAIL_SERVICE || "gmail",
      user: process.env.EMAIL_USER || "",
      password: process.env.EMAIL_PASSWORD || "",
      recipientEmail: process.env.RECIPIENT_EMAIL || "support@ai-editpro.net",
    };

    // If no email configured, return success but don't send
    if (!emailConfig.user || !emailConfig.password) {
      console.warn("Email not configured. Message received but not sent.");
      console.log("Form submission:", {
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        type,
        message: sanitizedMessage,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
        },
        { status: 200 }
      );
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: emailConfig.service,
      auth: {
        user: emailConfig.user,
        pass: emailConfig.password,
      },
    });

    // Email to admin
    const adminEmailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>From:</strong> ${sanitizedName} (${sanitizedEmail})</p>
      <p><strong>Subject:</strong> ${sanitizedSubject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${sanitizedMessage.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    // Email to user
    const userEmailContent = `
      <h2>We received your message!</h2>
      <p>Hi ${sanitizedName},</p>
      <p>Thank you for reaching out to AI-EditPro. We've received your ${type === "bug" ? "bug report" : type === "feature" ? "feature request" : "message"} and will get back to you within 24 hours.</p>
      <hr>
      <p><strong>Your message summary:</strong></p>
      <p>${sanitizedMessage.replace(/\n/g, "<br>").slice(0, 500)}</p>
      <hr>
      <p>Best regards,<br>The AI-EditPro Team</p>
    `;

    // Send emails
    await Promise.all([
      transporter.sendMail({
        from: emailConfig.user,
        to: emailConfig.recipientEmail,
        subject: `[${type.toUpperCase()}] ${sanitizedSubject}`,
        html: adminEmailContent,
      }),
      transporter.sendMail({
        from: emailConfig.user,
        to: sanitizedEmail,
        subject: "We received your message - AI-EditPro",
        html: userEmailContent,
      }),
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
