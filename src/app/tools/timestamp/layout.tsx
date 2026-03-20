import type { Metadata } from "next";
import TimestampPage from "./page";

export const metadata: Metadata = {
  title: "Timestamp Converter - Convert Unix Timestamps Online Free",
  description: "Free online timestamp converter. Convert between Unix timestamps, ISO dates, and human-readable dates. Current time in multiple formats.",
  keywords: ["timestamp converter", "unix timestamp", "epoch converter", "timestamp to date", "date to timestamp", "epoch time", "unix time converter", "timestamp calculator", "free timestamp converter", "online timestamp"].join(", "),
};

export default function Timestamp() {
  return <TimestampPage />;
}
