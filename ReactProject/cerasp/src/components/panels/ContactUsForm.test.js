import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUsForm from "./ContactUsForm";
import emailjs from "@emailjs/browser";

// Mock emailjs globally
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(),
}));

describe("ContactUsForm Component", () => {
  test("renders the form fields correctly", () => {
    render(<ContactUsForm />);

    // Check for form fields
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/I have read and agree to the Privacy Policy/i)).toBeInTheDocument();
  });

  test("shows error if Privacy Policy checkbox is not checked", () => {
    render(<ContactUsForm />);

    // Submit the form without checking the Privacy Policy
    fireEvent.click(screen.getByText(/Send/i));

    // Check for error message
    expect(screen.getByText(/You must agree to the Privacy Policy/i)).toBeInTheDocument();
  });

  test("submits the form successfully when all fields are valid", async () => {
    // Mock emailjs to simulate a successful submission
    emailjs.sendForm.mockResolvedValueOnce({ text: "Success" });

    render(<ContactUsForm />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Hello, this is a test message." } });
    fireEvent.click(screen.getByLabelText(/I have read and agree to the Privacy Policy/i));

    // Submit the form
    fireEvent.click(screen.getByText(/Send/i));

    // Check for success message
    expect(await screen.findByText(/Message sent successfully!/i)).toBeInTheDocument();
  });

  test("shows error if emailjs fails to send the form", async () => {
    // Mock emailjs to simulate a failure
    emailjs.sendForm.mockRejectedValueOnce({ text: "Error" });

    render(<ContactUsForm />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Hello, this is a test message." } });
    fireEvent.click(screen.getByLabelText(/I have read and agree to the Privacy Policy/i));

    // Submit the form
    fireEvent.click(screen.getByText(/Send/i));

    // Wait for the error message to appear
    expect(await screen.findByText(/Something went wrong. Please try again./i)).toBeInTheDocument();
  });
});
