## 2024-05-24 - Semantic Buttons for Icon Clicks
**Learning:** Attaching `onClick` handlers directly to SVGs or icons breaks keyboard navigation and screen reader support because SVGs are not natively focusable or semantic interactive elements.
**Action:** Always wrap clickable icons in a semantic `<button>` element with an appropriate `aria-label` to ensure full keyboard accessibility and screen reader support.
