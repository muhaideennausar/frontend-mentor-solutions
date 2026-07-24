# Frontend Mentor - Ping Coming Soon Page solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Ping Coming Soon Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/ping-coming-soon-page/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/ping-coming-soon-page/)

## Built with

- Semantic HTML5 markup
- CSS Flexbox
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/)
- Vanilla JavaScript

## What I learned

- Structuring HTML to group inputs and error messages cleanly for predictable responsive behavior across layouts.
- Implementing a debounce pattern in JavaScript to delay validation checks while the user is actively typing.
- Managing CSS specificity, particularly ensuring that `focus-within` states do not unintentionally override dynamic error classes.
- Replicating multi-layer Figma fills in Tailwind CSS by using `linear-gradient` overlays on top of background colors.
- Utilizing the `active:` pseudo-class to properly handle touch interactions on mobile devices, circumventing the "sticky hover" issue common on touchscreens.

## Continued development

- Adding smooth CSS transitions for the appearance and disappearance of error messages.
- Enhancing accessibility (a11y) by explicitly associating the error message with the input field using `aria-describedby` and `aria-invalid`.

## Useful resources

- [Libre Franklin on Google Fonts](https://fonts.google.com/specimen/Libre+Franklin) – the typeface used in the challenge.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – helped with styling, custom arbitrary values, and pseudo-class modifiers.
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da) – provided colours, spacing, and font weights.

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques.
