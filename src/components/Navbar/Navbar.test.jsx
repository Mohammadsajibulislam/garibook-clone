import { describe, expect, it, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider } from "../../i18n/I18nContext";
import Navbar from "./Navbar";

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

function renderNav() {
  return render(
    <I18nProvider>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </I18nProvider>
  );
}

describe("Navbar", () => {
  it("opens the mobile menu and closes it with Escape, restoring focus", () => {
    renderNav();

    const btn = screen.getByLabelText("Toggle navigation");
    expect(btn).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(window, { key: "Escape" });
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(btn).toHaveFocus();
  });

  it("toggles language between English and Bangla", () => {
    renderNav();
    const [langBtn] = screen.getAllByLabelText("Switch to Bangla");
    expect(langBtn).toHaveTextContent("English");
    fireEvent.click(langBtn);
    expect(screen.getAllByLabelText("Switch to English")[0]).toHaveTextContent(
      "বাংলা"
    );
  });

  it("links login to the login route", () => {
    renderNav();
    const loginLinks = screen.getAllByRole("link").filter(
      (el) => el.getAttribute("href") === "/login"
    );
    expect(loginLinks.length).toBeGreaterThan(0);
  });
});
