# Social Links Profile — My Frontend Mentor Solution

I built this Social Links Profile as a handcrafted, responsive component to meet Frontend Mentor's challenge specification. The page presents a polished profile card with an avatar, a compact personal statement, and a stack of prominent social buttons — all composed in plain HTML and CSS with a mobile-first mindset.

## What this project is

- A single static page demonstrating layout, typographic rhythm, and interaction design without JavaScript.
- An exercise in accessible, touch-friendly UI: the social controls are implemented as semantic buttons and the layout adapts gracefully from narrow to wide viewports.

## Visual proofs (included)

I captured two screenshots illustrating the result on different breakpoints. They live beside `index.html` in this folder but are not embedded here:

- `mobile-screenshot.png` — mobile presentation
- `desktop-screenshot.png` — desktop presentation

## Highlights

- Mobile-first responsive layout and carefully tuned spacing
- Inter font for clean, modern typography
- Circular avatar and centered composition for visual focus
- Tactile, accessible buttons with an active state and clear affordance

## Tech stack

- HTML5
- CSS3 (custom properties and responsive rules)
- Google Fonts (Inter)

## Files

- `index.html` — the markup for the profile component
- `style.css` — all styles, organized for mobile-first development
- `assets/avatar-jessica.jpeg` — avatar image used by the page
- `mobile-screenshot.png` and `desktop-screenshot.png` — included visual proofs
- `social-links-profile.fig` — design reference exported from Figma

## How to run

To view this project locally, simply clone the repository and open the `index.html` file in your browser:

```pwsh
# Clone the repository
git clone https://github.com/muhaideennausar/frontend-mentor-solutions.git

# Navigate to the project folder
cd frontend-mentor-solutions/social-links-profile

# Open the index.html file in your browser
start index.html
```

## Accessibility notes

- Buttons are semantic `button` elements and therefore keyboard-focusable; keep or refine focus styles if you change element types.
- Colors were chosen for legibility on a dark canvas. If you require strict WCAG compliance, verify contrast ratios for your target audience.

## Attribution

This solution was created by me as part of Frontend Mentor practice. The original design and challenge are credited to Frontend Mentor; I include the Figma file for reference.

## License

This project is shared for learning and portfolio use. Reuse freely for education and personal showcases; please credit the original challenge where appropriate.
