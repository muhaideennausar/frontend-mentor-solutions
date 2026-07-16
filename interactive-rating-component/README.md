# Frontend Mentor - Interactive Rating Component solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Interactive Rating Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/interactive-rating-component/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/interactive-rating-component/)

## Built with

- Semantic HTML5 markup
- Tailwind CSS (Utility-first framework)
- Flexbox layout
- Mobile-first workflow
- Vanilla JavaScript for DOM manipulation

## What I learned

- **State Management & DOM Manipulation:** Handled user interactions by tracking the selected rating in a JavaScript variable (`selectedRating`) and dynamically updating DOM elements based on the click events.
- **Conditional Rendering:** Successfully toggled the visibility of the rating card and the thank-you card by manipulating Tailwind's `hidden` utility class via JavaScript's `classList` API.
- **Form Validation:** Implemented a basic safeguard using a conditional check (`if (!selectedRating)`) to trigger an alert if a user attempts to submit without choosing a rating.
- **Advanced Tailwind Styling:** Utilized arbitrary values and custom gradient utility classes (e.g., `bg-linear-to-b from-[#0e1625] to-[#0a1121]`) to accurately match the provided design specifications.

## Continued development

- **Accessibility (a11y):** Improve keyboard navigation by ensuring users can tab through the rating buttons and select them using the `Enter` or `Space` keys. Additionally, adding `aria-labels` and `role` attributes to enhance screen reader support.
- **Animations:** Introduce subtle CSS transitions (fade-in/fade-out effects) when swapping the component states to make the user experience feel smoother.

## Useful resources

- [Overpass on Google Fonts](https://fonts.google.com/specimen/Overpass) – the typeface used in this challenge.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – an excellent reference for utility classes, arbitrary values, and responsive design breakpoints.
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI) – provided colours, spacing, and font weights.

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques.
