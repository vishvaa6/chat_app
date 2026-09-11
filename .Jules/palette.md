## 2024-05-20 - Icon Buttons Accessibility
**Learning:** The application uses SVGs directly with `onClick` handlers for interactive elements (like the logout action), which prevents keyboard focusability and screen reader support.
**Action:** Always wrap interactive SVGs/icons in semantic `<button>` tags with appropriate `aria-label`s.
