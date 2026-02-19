import { test } from "vitest";
import { render } from "@testing-library/react";
import Page from "@/app/(public)/page";

test("Page", () => {
  render(<Page />);
});
