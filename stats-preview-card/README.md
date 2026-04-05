# Frontend Mentor - Stats Preview Card solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Stats Preview Card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-challenges/stats-preview-card/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-challenges/stats-preview-card/)

## Built with

- Semantic HTML5 markup
- CSS3 custom properties (CSS variables)
- Flexbox layout
- Mobile-first workflow
- Responsive images & media queries
- BEM naming convention

## What I learned

- **Swapping images with CSS `content`** – On mobile view, I replaced the desktop image with a mobile version using `content: url()` inside a media query, avoiding extra markup or JavaScript.
- **Color overlay with `mix-blend-mode`** – Applied a purple overlay on the hero image using a pseudo-element with `mix-blend-mode: multiply`, matching the design’s tinted effect without editing the original asset.
- **Relative units (`em`) for scalable typography** – Used `em` units for font sizes, margins, and paddings throughout, making the card scale proportionally when the root font size changes.
- **BEM naming for maintainable CSS** – Structured classes like `stats-card__title--accent` and `stats-card__stats-group` to keep styles modular and self-documenting.

## Continued development

- **Improve accessibility** – Add `alt` text for the decorative image and ensure proper color contrast ratios for the purple accent and white text.
- **Convert to CSS Grid** – Replace the current flexbox layout with CSS Grid for more robust two-dimensional control, especially on the stats group.

## Useful resources

- [Inter & Lexend Deca on Google Fonts](https://fonts.google.com/specimen/Inter) – the typefaces used in the challenge
- [CSS `content` property (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/content) – helped dynamically swap the hero image on mobile
- [mix-blend-mode (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode) – used to create the purple image overlay
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62) – provided colours, spacing, and font weights

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design files and the open‑source community for sharing responsive techniques.
