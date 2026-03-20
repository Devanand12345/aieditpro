import type { Metadata } from "next";
import PasswordStrengthClient from "./page";

export const metadata: Metadata = {
  title: "Password Strength Checker - Test Password Security Online",
  description: "Free password strength checker. Test how secure your password is, see crack time estimates, and get tips to make stronger passwords. Instant, private, no data stored.",
  keywords: [
    "password strength checker",
    "password strength tester",
    "check password strength",
    "password security checker",
    "password strength meter",
    "test password strength",
    "password strength analyzer",
    "password strength calculator",
    "password strength tool",
    "password strength online",
    "strong password checker",
    "weak password checker",
    "password quality checker",
    "password complexity checker",
    "password entropy calculator",
    "password crack time calculator",
    "password strength rating",
    "password safety checker",
    "is my password secure",
    "password security test",
    "password strength evaluator",
    "check password security",
    "password strength detector",
    "how strong is my password",
    "password security score",
    "password strength indicator",
    "password validator",
    "password quality meter",
    "password strength scanner",
    "password hacker check",
    "password breach checker",
    "password leak checker",
    "password strength tool",
    "password robustness checker",
    "password strength grader",
    "password strength monitor",
    "password security analyzer",
    "password safety meter",
  ].join(", "),
};

export default function PasswordStrengthChecker() {
  return <PasswordStrengthClient />;
}
