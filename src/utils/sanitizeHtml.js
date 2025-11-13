const DEFAULT_ALLOWED_TAGS = new Set([
  "A",
  "B",
  "STRONG",
  "EM",
  "I",
  "U",
  "BR",
  "P",
  "UL",
  "OL",
  "LI",
  "SPAN",
]);

const ALLOWED_ATTRIBUTES = {
  A: new Set(["href", "target", "rel"]),
};

const escapeHtml = (input = "") =>
  input.replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });

const isSafeUrl = (url) => {
  if (!url) return false;
  const trimmed = url.trim().toLowerCase();
  return (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("mailto:")
  );
};

export function sanitizeHtml(dirty = "") {
  if (typeof dirty !== "string" || !dirty.length) {
    return "";
  }

  if (typeof window === "undefined" || typeof window.DOMParser === "undefined") {
    return escapeHtml(dirty);
  }

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(dirty, "text/html");

  const sanitizeNode = (node) => {
    const children = Array.from(node.children);
    children.forEach((child) => {
      const tagName = child.tagName.toUpperCase();
      if (!DEFAULT_ALLOWED_TAGS.has(tagName)) {
        const textNode = doc.createTextNode(child.textContent || "");
        child.replaceWith(textNode);
        return;
      }

      const allowedAttrs = ALLOWED_ATTRIBUTES[tagName] || new Set();
      Array.from(child.attributes).forEach((attr) => {
        const attrName = attr.name.toLowerCase();
        if (!allowedAttrs.has(attrName)) {
          child.removeAttribute(attr.name);
        }
      });

      if (tagName === "A") {
        const href = child.getAttribute("href") || "";
        if (!isSafeUrl(href)) {
          child.removeAttribute("href");
        } else {
          child.setAttribute("target", "_blank");
          child.setAttribute("rel", "noopener noreferrer");
        }
      }

      sanitizeNode(child);
    });
  };

  sanitizeNode(doc.body);
  return doc.body.innerHTML;
}
