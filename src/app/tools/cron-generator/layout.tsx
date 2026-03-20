import type { Metadata } from "next";
import CronGeneratorClient from "./page";

export const metadata: Metadata = {
  title: "Cron Expression Generator - Create Cron Jobs Online Free",
  description: "Free online cron expression generator. Create and validate cron jobs for Linux, Unix, and scheduling tasks. Visual cron schedule builder with examples.",
  keywords: ["cron expression generator", "cron job generator", "cron scheduler", "crontab", "cron syntax", "cron schedule", "linux cron", "unix cron", "cron parser", "cron validator", "schedule cron job", "free cron generator", "online cron builder"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/cron-generator" },
};

export default function CronGenerator() {
  return <CronGeneratorClient />;
}
