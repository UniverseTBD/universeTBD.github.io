import { describe, it, expect, beforeEach } from "vitest";
import { sanitizeHtml } from "@/utils/sanitizeHtml";

describe("sanitizeHtml utility", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("strips script tags", () => {
    const result = sanitizeHtml('Nice bio<script>alert("xss")</script>');
    expect(result).toBe("Nice bio");
  });

  it("preserves anchor tags with safe attributes", () => {
    const result = sanitizeHtml(
      '<a href="https://example.com" onclick="alert(1)">Link</a>'
    );
    expect(result).toContain('href="https://example.com"');
    expect(result).not.toContain("onclick");
    expect(result).toContain('rel="noopener noreferrer"');
    expect(result).toContain('target="_blank"');
  );

  it("removes unsafe urls", () => {
    const result = sanitizeHtml('<a href="javascript:alert(1)">Bad</a>');
    expect(result).toBe("<a>Bad</a>");
  });

  it("escapes when DOMParser unavailable", () => {
    const originalParser = global.window.DOMParser;
    // @ts-ignore
    global.window.DOMParser = undefined;
    const result = sanitizeHtml('<strong>hello</strong>');
    expect(result).toBe("&lt;strong&gt;hello&lt;/strong&gt;");
    global.window.DOMParser = originalParser;
  });
});
