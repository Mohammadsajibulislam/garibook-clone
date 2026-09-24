import { describe, expect, it, afterEach } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider } from "../../i18n/I18nContext";
import BookingSection from "./BookingSection";

afterEach(cleanup);

function renderUI() {
  return render(
    <I18nProvider>
      <MemoryRouter>
        <BookingSection />
      </MemoryRouter>
    </I18nProvider>
  );
}

describe("BookingSection form", () => {
  it("shows validation errors when Continue is clicked empty", () => {
    renderUI();
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
    expect(screen.getByText("Please select a car type.")).toBeInTheDocument();
    expect(
      screen.getByText("Please enter a pickup location.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please enter a drop-off location.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please choose a pickup date & time.")
    ).toBeInTheDocument();
  });

  it("shows a local trip summary after valid submit (no backend)", () => {
    renderUI();
    fireEvent.change(screen.getByLabelText(/choose a car/i), {
      target: { value: "Sedan" },
    });
    fireEvent.change(screen.getByLabelText(/pickup location/i), {
      target: { value: "Gulshan" },
    });
    fireEvent.change(screen.getByLabelText(/drop-off location/i), {
      target: { value: "Banani" },
    });
    fireEvent.change(screen.getByLabelText(/pickup date/i), {
      target: { value: "2026-10-01T10:00" },
    });

    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(screen.getByText("Trip summary ready")).toBeInTheDocument();
    expect(
      screen.getByText(/Frontend demo only/i)
    ).toBeInTheDocument();
  });

  it("exposes tablist keyboard-friendly tabs", () => {
    renderUI();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(2);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("aria-controls", "booking-panel-car-rental");
    fireEvent.click(tabs[1]);
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByLabelText(/pickup airport/i)
    ).toBeInTheDocument();
  });
});
