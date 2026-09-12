## 2026-09-12 - Direct click handlers on SVG icons
**Learning:** Found an accessibility pattern where click handlers were attached directly to SVG elements instead of buttons, making them completely inaccessible to keyboard navigation and screen readers.
**Action:** Wrapped the SVG in a semantic <button> with an aria-label and focus-visible styling.
