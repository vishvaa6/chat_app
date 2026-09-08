## 2024-05-18 - Semantic Buttons for Icon Click Handlers
**Learning:** Attaching `onClick` directly to SVG/icons makes the element inaccessible to keyboard navigation and screen readers. Users cannot focus the element or understand its action.
**Action:** Always wrap interactive icons in a semantic `<button>` tag with an appropriate `aria-label` attribute instead of adding click handlers directly to the icon.
