import type { Metadata } from "next";
import IPLookupClient from "./page";

export const metadata: Metadata = {
  title: "IP Lookup - Find My IP Address & IP Location Checker Online",
  description: "Free IP lookup tool. Find your public IP address, check IP location, ISP, and geolocation. Works with any IP. Instant results with detailed IP information.",
  keywords: ["ip lookup", "my ip", "ip address", "ip location", "ip finder", "what is my ip", "ip checker", "ip tracker", "ip geolocation", "ip info", "find ip", "ip search", "public ip", "ip address lookup", "ip location finder", "isp lookup"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/ip-lookup" },
};

export default function IPLookup() {
  return <IPLookupClient />;
}
