import { describe, it, expect, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

describe("Hero Background - Flash Prevention", () => {
  let dom;
  let document;

  beforeEach(() => {
    // Load the actual index.html
    const html = fs.readFileSync(
      path.resolve(__dirname, "../../index.html"),
      "utf-8"
    );
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  it("should have critical CSS in head to prevent flash", () => {
    const styles = document.querySelectorAll("head style");
    let hasCriticalCSS = false;

    styles.forEach((style) => {
      const content = style.textContent;
      if (
        content.includes(".page-header") &&
        content.includes("background-color")
      ) {
        hasCriticalCSS = true;
      }
    });

    expect(hasCriticalCSS).toBe(true);
  });

  it("should preload the hero background image", () => {
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    let hasImagePreload = false;

    preloadLinks.forEach((link) => {
      if (
        link.getAttribute("as") === "image" &&
        link.getAttribute("href").includes("background")
      ) {
        hasImagePreload = true;
      }
    });

    expect(hasImagePreload).toBe(true);
  });

  it("should set dark background color in critical CSS", () => {
    const styles = document.querySelectorAll("head style");
    let hasCorrectBackgroundColor = false;

    styles.forEach((style) => {
      const content = style.textContent;
      // Check for dark background color (not white)
      if (
        content.includes(".page-header") &&
        content.includes("background-color") &&
        content.includes("#05060a")
      ) {
        hasCorrectBackgroundColor = true;
      }
    });

    expect(hasCorrectBackgroundColor).toBe(true);
  });

  it("should reserve minimum height in critical CSS", () => {
    const styles = document.querySelectorAll("head style");
    let hasMinHeight = false;

    styles.forEach((style) => {
      const content = style.textContent;
      if (
        content.includes(".page-header") &&
        (content.includes("min-height") || content.includes("height"))
      ) {
        hasMinHeight = true;
      }
    });

    expect(hasMinHeight).toBe(true);
  });

  it("should set fetchpriority high on image preload", () => {
    const imagePreload = Array.from(
      document.querySelectorAll('link[rel="preload"]')
    ).find((link) => link.getAttribute("as") === "image");

    if (imagePreload) {
      expect(imagePreload.getAttribute("fetchpriority")).toBe("high");
    }
  });

  it("should apply dark background to html element to prevent flash", () => {
    const styles = document.querySelectorAll("head style");
    let hasHtmlBackground = false;

    styles.forEach((style) => {
      const content = style.textContent;
      if (content.includes("html") && content.includes("background-color")) {
        hasHtmlBackground = true;
      }
    });

    expect(hasHtmlBackground).toBe(true);
  });

  it("should apply body background immediately for pages", () => {
    const styles = document.querySelectorAll("head style");
    let hasBodyBackground = false;

    styles.forEach((style) => {
      const content = style.textContent;
      if (content.includes("body") && content.includes("background-color")) {
        hasBodyBackground = true;
      }
    });

    expect(hasBodyBackground).toBe(true);
  });
});
