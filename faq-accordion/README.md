# Frontend Mentor - FAQ Accordion solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [FAQ Accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/faq-accordion/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/faq-accordion/)

## Built with

- Semantic HTML5 markup
- Tailwind CSS utilities for responsive layout and styling
- Flexbox structure for aligning icons and typography headers
- Mobile-first workflow
- Pure JavaScript for managing accordion interaction states

## What I learned

- **Dynamic Class Toggling for Transitions:** Implemented smooth transitions for accordion bodies by removing and adding max-height and opacity utility classes (`max-h-0 opacity-0` to `max-h-50 opacity-100`) dynamically within JavaScript.
- **Exclusive Accordion Behaviors:** Authored logic to track the `activeHeader`, allowing previously opened FAQs to collapse automatically when a new header is toggled.
- **Responsive Background Handling:** Leveraged Tailwind's arbitrary values and variants to switch out responsive decorative background SVG vectors between mobile and desktop configurations.

## Continued development

- **Accessibility Optimization:** Enhance accessibility (a11y) by incorporating standard aria attributes like `aria-expanded` and `aria-controls` to assist screen-readers navigating the accordions.
- **Keyboard Navigation:** Extend the JavaScript implementation to support full keyboard navigation (e.g., handling Arrow keys and Enter/Space triggers natively on focus states).

## Useful resources

- [Work Sans on Google Fonts](https://fonts.google.com/specimen/Work+Sans) – the official typography typeface family utilized for this interface solution.
- [Tailwind CSS Transition Documentation](https://tailwindcss.com/docs/transition-property) – helped configure smooth UI acceleration curves for height expansion adjustments.
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz) – provided clear guidance on target asset layouts, color schemes, and spacing details.

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design specs and the open‑source community for sharing scalable responsive utility techniques.
