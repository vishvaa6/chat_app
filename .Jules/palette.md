## 2024-11-20 - SVG Icon Accessibility
**Learning:** Attaching `onClick` events directly to SVG icons makes them inaccessible to keyboard users and screen readers, as SVGs are not natively focusable or interactive elements.
**Action:** Always wrap interactive SVG icons in a semantic `<button>` element with an appropriate `aria-label` and focus styles.
