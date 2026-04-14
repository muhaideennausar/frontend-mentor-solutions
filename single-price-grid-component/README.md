# Frontend Mentor - Single Price Grid Component solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Single Price Grid Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/single-price-grid-component/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/single-price-grid-component/)

## Built with

- Semantic HTML5 markup
- CSS3 custom properties (CSS variables)
- Flexbox & Grid layout
- Responsive images & media queries
- BEM naming convention

## What I learned

- **CSS Grid for complex card layouts** – Used `grid-template-areas` to define three distinct sections (join, subscription, why us) and easily rearranged them on mobile with a single media query.
- **Relative units (`em`)** – Scaled typography and spacing using `em` instead of pixels, making the component more resilient to browser font-size changes.
- **Opacity + hsla for colour variations** – Created a slightly lighter teal background for the "Why Us" section using `hsla(179, 62%, 43%, 85%)` while keeping the base colour as a CSS variable.
- **Responsive breakpoint at 768px** – Switched from a 2‑column grid to a single‑column layout, adjusted padding and border-radius, and fine-tuned font sizes for better mobile readability.

## Continued development

- **Accessibility** – Improve contrast ratios, add `aria-label` for the button, and ensure keyboard navigation flows logically.

## Useful resources

- [Karla on Google Fonts](https://fonts.google.com/specimen/Karla) – The clean, geometric sans‑serif typeface used in the challenge.
- [CSS Grid Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) – Helped master `grid-template-areas` for the responsive card layout.
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc) – Provided exact colours, spacing, and font weights (available in the challenge download).

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques that helped refine the mobile breakpoint behaviour.
