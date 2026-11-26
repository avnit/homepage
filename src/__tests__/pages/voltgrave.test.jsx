// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/head", () => ({
  default: ({ children }) => <>{children}</>,
}));

import { districts, mechanics } from "components/voltgrave/content";

import Voltgrave from "pages/voltgrave";

describe("pages/voltgrave", () => {
  it("renders the four boards with their headings", () => {
    render(<Voltgrave />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("VOLTGRAVE");
    expect(screen.getByRole("heading", { level: 2, name: "The Six Districts" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "The Tesla Cathedral" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Redstone Haunts" })).toBeInTheDocument();
  });

  it("renders a card for every district and circuit", () => {
    render(<Voltgrave />);

    districts.forEach((district) => {
      expect(screen.getByRole("heading", { level: 3, name: district.name })).toBeInTheDocument();
    });
    mechanics.circuits.forEach((circuit) => {
      expect(screen.getByRole("heading", { level: 3, name: circuit.name })).toBeInTheDocument();
    });
  });

  it("draws the world map and cathedral elevation as labelled images", () => {
    render(<Voltgrave />);

    expect(screen.getByRole("img", { name: /World map/ })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /South elevation/ })).toBeInTheDocument();
  });

  it("prints the AMP console commands verbatim", () => {
    render(<Voltgrave />);

    const console = screen.getByText(/gamerule doDaylightCycle false/);
    expect(console).toHaveTextContent("weather thunder");
    expect(console).toHaveTextContent("whitelist on");
  });
});
