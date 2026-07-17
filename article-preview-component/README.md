# Frontend Mentor - Article Preview Component solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Article Preview Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/article-preview-component/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/article-preview-component/)

## Built with

- Semantic HTML5 markup
- Tailwind CSS framework
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM manipulation)

## What I learned

- Building a responsive card layout that shifts from vertical on mobile to horizontal on desktop using Tailwind's `md:` media query prefixes.
- Creating a custom interactive tooltip component. I used JavaScript to toggle Tailwind utility classes like `opacity-0` and `invisible` to smoothly animate the share tooltip's entry and exit.
- Handling different states for buttons, dynamically swapping SVG fill colors and background colors utilizing event listeners in JavaScript.
- Positioning elements contextually, leveraging absolute positioning for the desktop tooltip popup with CSS triangles created via `after` pseudo-elements (e.g., `md:after:rotate-45`).

## Continued development

- Enhance accessibility by implementing ARIA attributes (such as `aria-expanded` and `aria-controls`) on the toggle buttons and tooltip to better support screen reader users.
- Explore adding keyboard navigation support for the tooltip pop-up.

## Useful resources

- [Manrope on Google Fonts](https://fonts.google.com/specimen/Manrope) – the typeface used in this challenge.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – highly useful for finding the right utility classes for layout, typography, and precise spacing configuration.
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT) – provided colours, spacing, and font weights.

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques.
