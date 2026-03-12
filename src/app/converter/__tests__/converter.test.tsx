import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ConverterPage from "../page";

describe("ConverterPage", () => {
  test("renders form elements", () => {
    render(<ConverterPage />);
    expect(screen.getByText(/file converter/i)).toBeDefined();
    expect(screen.getByText(/convert to/i)).toBeDefined();
    expect(screen.getByRole("button", { name: /convert/i })).toBeDisabled();
    expect(screen.getByLabelText(/convert to/i)).toBeDefined();
    expect(document.querySelector('input[type=file]')).toBeTruthy();
  });

  test("enables button when file selected", () => {
    render(<ConverterPage />);
    const fileInput = document.querySelector('input[type=file]') as HTMLInputElement;
    expect(fileInput).toBeTruthy();
    // simulate change event
    const file = new File(["hello"], "test.txt", { type: "text/plain" });
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(screen.getByRole("button", { name: /convert/i })).not.toBeDisabled();
  });
});
