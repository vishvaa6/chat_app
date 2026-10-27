## 2026-10-27 - Added ARIA labels to icon buttons and inputs
**Learning:** Icon-only buttons (like search and send message) and placeholder-only inputs lack accessible names, making them invisible or confusing for screen reader users. Adding `aria-label` provides the necessary context without changing the visual layout.
**Action:** Always verify that icon-only buttons and inputs have accessible names via `aria-label` or associated `label` elements during component creation.
