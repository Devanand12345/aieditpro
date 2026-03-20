import type { Metadata } from "next";
import FakeDataGeneratorClient from "./page";

export const metadata: Metadata = {
  title: "Fake Data Generator - Generate Fake Names, Addresses, Emails Online",
  description: "Free fake data generator. Generate fake names, emails, addresses, phone numbers for testing. Create realistic test data instantly.",
  keywords: ["fake data generator", "fake name generator", "test data generator", "sample data generator", "random data generator", "mock data generator", "fake email generator", "fake address generator"].join(", "),
};

export default function FakeDataGenerator() {
  return <FakeDataGeneratorClient />;
}
