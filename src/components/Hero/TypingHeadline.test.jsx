import { describe, expect, it, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import TypingHeadline from "./TypingHeadline";
import { heroTitles } from "../../data/content";

afterEach(cleanup);

describe("TypingHeadline", () => {
  it("renders a static headline when reduced motion is preferred", () => {
    // setup.js defaults matchMedia to reduced-motion = true
    render(<TypingHeadline titles={heroTitles} />);
    const staticEl = document.querySelector(".typing-text-static");
    expect(staticEl).not.toBeNull();
    expect(staticEl).toHaveTextContent("Assurance of Effortless Travel");
    expect(document.querySelector(".typing-text")).toBeNull();
  });

  it("exposes an sr-only equivalent while animating", () => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    });

    render(<TypingHeadline titles={heroTitles} />);
    expect(document.querySelector(".typing-text")).not.toBeNull();
    expect(
      screen.getByText("Assurance of Effortless Travel")
    ).toBeInTheDocument();
  });
});
