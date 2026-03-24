import type { Metadata } from "next";
import AICodeReviewClient from "./page";

export const metadata: Metadata = {
  title: "AI Code Review - Code Analysis & Improvement with AI",
  description: "Free AI-powered code review tool. Analyze code for bugs, security issues, and get improvement suggestions. Supports multiple programming languages.",
  keywords: ["ai code review", "code review", "code analysis", "ai code assistant", "code quality", "security scan", "code optimization", "programming assistant", "lint", "code checker"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/ai-code-review" },
};

export default function AICodeReview() {
  return <AICodeReviewClient />;
}
