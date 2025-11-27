import { afterEach, vi } from "vitest";

afterEach(() => {
  document.body.className = "";
  document.body.innerHTML = "";
  vi.restoreAllMocks();
});
