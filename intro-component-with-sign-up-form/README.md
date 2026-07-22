# Frontend Mentor - Intro Component with Sign Up Form solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Intro Component with Sign Up Form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/intro-component-with-sign-up-form/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/intro-component-with-sign-up-form/)

## Built with

- Semantic HTML5 markup
- Tailwind CSS
- Vanilla JavaScript
- Flexbox / Grid layout
- Mobile-first workflow
- Responsive images & media queries

## What I learned

- **Advanced CSS Selectors:** Using the `:not(:placeholder-shown)` pseudo-class combined with `:focus` to create active input states without relying entirely on JavaScript event listeners.
- **Form Validation with Regex:** Implementing custom form validation using Vanilla JavaScript and Regular Expressions to verify strict email formats, while overriding default browser tooltips with the `novalidate` attribute.
- **DOM Traversal:** Navigating the Document Object Model using properties like `nextElementSibling` and `parentElement` to dynamically target and toggle specific error icons and messages for individual input fields within a `.forEach()` loop.
- **Managing CSS Specificity:** Structuring chained CSS utility classes (e.g., `.input-default.input-error`) to ensure error state borders and text colors properly override default and focus styles when validation fails.

## Continued development

- **Real-Time Validation:** Refine the form to evaluate input fields dynamically as the user types (using the `input` event), rather than exclusively waiting for the form submission.
- **Accessibility:** Improve screen reader support by adding appropriate ARIA attributes (such as `aria-invalid` and `aria-describedby`) to the form inputs and error messages when validation fails.

## Useful resources

- [Poppins on Google Fonts](https://fonts.google.com/specimen/Poppins) – the primary typeface used in the challenge layout.
- [MDN Web Docs: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) – provided guidance on formatting the regex pattern to validate email addresses.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – helped with setting up utility classes, custom pseudo-class states, and arbitrary values for pixel-perfect spacing.

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques.
