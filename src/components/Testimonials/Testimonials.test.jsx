import { describe, expect, it } from "vitest";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider } from "../../i18n/I18nContext";
import Testimonials from "./Testimonials";

afterEach(cleanup);

function renderUI() {
  return render(
    <I18nProvider>
      <MemoryRouter>
        <Testimonials />
      </MemoryRouter>
    </I18nProvider>
  );
}

describe("Testimonials", () => {
  it("renders the section heading and cards", () => {
    renderUI();
    expect(
      screen.getByRole("heading", { name: "Our Passengers Speak For Us" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Previous testimonial")).toBeDisabled();
  });

  it("advances with next and disables at the end", () => {
    renderUI();
    const next = screen.getByLabelText("Next testimonial");
    const prev = screen.getByLabelText("Previous testimonial");

    fireEvent.click(next);
    expect(prev).toBeEnabled();

    // Click until we hit the end (max start depends on viewport mocks).
    let guard = 0;
    while (!next.disabled && guard < 10) {
      fireEvent.click(next);
      guard += 1;
    }
    expect(next).toBeDisabled();
  });

  it("announces the visible range via aria-live", () => {
    renderUI();
    const live = screen.getByRole("status");
    expect(live).toHaveAttribute("aria-live", "polite");
    expect(live.textContent).toMatch(/of 4/);
  });
});
