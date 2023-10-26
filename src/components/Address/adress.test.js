import React from "react";
import { render, screen } from "@testing-library/react";
import { Address } from "./Adress";
import { MemoryRouter } from "react-router-dom";

test("renders Contacts section with correct data", () => {
  render(
    <MemoryRouter>
      <Address />
    </MemoryRouter>
  );

  expect(screen.getByText("Contacts")).toBeInTheDocument();
  expect(screen.getByText("591 95 06 63")).toBeInTheDocument();
  expect(screen.getByText("dbeqaabuladze@gmail.com")).toBeInTheDocument();
  expect(screen.getByAltText("Twitter Logo")).toBeInTheDocument();
  expect(screen.getByAltText("Facebook Logo")).toBeInTheDocument();
  expect(screen.getByAltText("Skype Logo")).toBeInTheDocument();
});
