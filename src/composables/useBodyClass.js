import { onMounted, onUnmounted } from "vue";

/**
 * Adds the provided class names to the <body> on mount and cleans them up on unmount.
 * Accepts a string or an array of strings.
 */
export function useBodyClass(classNames = []) {
  const normalized = Array.isArray(classNames) ? classNames : [classNames];

  const addClasses = () => {
    if (typeof document === "undefined") return;
    normalized.forEach((className) => {
      if (className && !document.body.classList.contains(className)) {
        document.body.classList.add(className);
      }
    });
  };

  const removeClasses = () => {
    if (typeof document === "undefined") return;
    normalized.forEach((className) => {
      if (className && document.body.classList.contains(className)) {
        document.body.classList.remove(className);
      }
    });
  };

  onMounted(addClasses);
  onUnmounted(removeClasses);
}
