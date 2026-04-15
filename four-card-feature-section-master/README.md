# Frontend Mentor - Four Card Feature Section Master solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Four Card Feature Section Master challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/four-card-feature-section-master/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/four-card-feature-section-master/)

## Built with

- Semantic HTML5 markup
- CSS3 custom properties (CSS variables)
- Flexbox layout for card alignment
- Mobile-first workflow
- Responsive images & media queries
- Pseudo-elements (`::before`) for coloured top borders

## What I learned

- Using `::before` pseudo-elements to create coloured accent borders without extra HTML markup – each card gets its own colour via a modifier class.
- Building a responsive three‑column layout that collapses into a single column on mobile using `flex-direction: column` and a media query.
- Centring the entire layout with `min-height: 100vh`, `display: flex`, and `align-items: center`, while keeping the hero section centred with `text-align: center`.
- Hiding scrollbars cross‑browser (`scrollbar-width: none`, `-ms-overflow-style`, and `::-webkit-scrollbar`) for a cleaner UI.

## Continued development

- Improve accessibility by adding `:focus-visible` styles for keyboard navigation and ensuring proper heading hierarchy.
- Convert the card container from Flexbox to CSS Grid to enable more flexible gap management and easier reordering on different breakpoints.

## Useful resources

- [Poppins on Google Fonts](https://fonts.google.com/specimen/Poppins) – the typeface used in the challenge
- [CSS `::before` pseudo-element (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) – helped implement the top border accent without extra divs
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK) – provided colours, spacing, and font weights

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques.
