import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const { code, language, action } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "Claude API key not configured. Please add ANTHROPIC_API_KEY to environment variables." },
        { status: 500 }
      );
    }

    let prompt = "";

    if (action === "review") {
      prompt = `You are an expert code reviewer. Review the following ${language || "code"} code and provide:
1. Code quality issues
2. Potential bugs or security vulnerabilities
3. Performance improvements
4. Best practices suggestions
5. Overall rating (1-10)

Format your response with clear sections.

Code to review:
\`\`\`${language || ""}
${code}
\`\`\``;
    } else if (action === "explain") {
      prompt = `You are an expert developer explaining code. Explain the following ${language || "code"} in simple terms:

\`\`\`${language || ""}
${code}
\`\`\`

Provide:
1. What the code does (summary)
2. How it works (breakdown)
3. Key concepts explained
4. Any important details developers should know`;
    } else if (action === "fix") {
      prompt = `You are an expert developer. Fix the following ${language || "code"} and explain the fixes:

\`\`\`${language || ""}
${code}
\`\`\`

Provide the fixed code and explain what was wrong and how you fixed it.`;
    } else if (action === "optimize") {
      prompt = `You are an expert developer optimizing code. Optimize the following ${language || "code"} for performance:

\`\`\`${language || ""}
${code}
\`\`\`

Provide:
1. The optimized code
2. What was optimized
3. Performance improvements
4. Any trade-offs`;
    } else {
      prompt = `You are an expert developer assistant. Help with the following ${language || "code"}:

\`\`\`${language || ""}
${code}
\`\`\``;
    }

    const message = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const response = message.content[0];
    if (response.type === "text") {
      return NextResponse.json({ response: response.text });
    }

    return NextResponse.json({ response: "No response from Claude" });
  } catch (error: unknown) {
    console.error("Claude API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to get response from Claude. Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
