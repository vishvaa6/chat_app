## 2024-05-24 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Found multiple instances where icon-only buttons lacked ARIA labels, making primary actions inaccessible to screen readers.
**Action:** Always verify that buttons containing only SVG/Icons have explicit `aria-label` attributes describing their function.