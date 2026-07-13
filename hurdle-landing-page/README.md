# Frontend Mentor - Hurdle Landing Page solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Hurdle Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/hurdle-landing-page/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/hurdle-landing-page/)

## Built with

- Semantic HTML5 markup
- CSS3 custom properties (CSS variables)
- Flexbox / Grid layout
- Mobile-first workflow
- [Tailwind CSS v4](https://tailwindcss.com/)
- Font Awesome Icons

## What I learned

- Utilizing Tailwind CSS arbitrary values and specific breakpoints to seamlessly swap background SVGs based on screen size (`bg-[url('./assets/bg-mobile.svg')] md:bg-[url('./assets/bg-desktop.svg')]`).
- Creating a 15-column CSS Grid (`md:grid-cols-15`) to perfectly balance and align the hero illustration (`md:col-span-9`) and text content (`md:col-span-6`) on desktop views.
- Managing customized interactive states (hover, active, focus) using Tailwind utility classes to match the specific design requirements for buttons and social icons.

## Continued development

- Enhancing accessibility by adding robust `aria-label` attributes to the social media links, as they currently only contain icon tags.
- Exploring more advanced features and optimizations of the new Tailwind CSS v4 engine for even cleaner utility class management.

## Useful resources

- [Google Fonts (Poppins & Open Sans)](https://fonts.google.com/) – The typefaces used in the challenge.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) – Invaluable for applying utility classes and configuring custom design properties.
- [Font Awesome](https://fontawesome.com/) – Used for providing scalable vector social media icons.
- [Frontend Mentor Style Guide](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0) – Provided colours, spacing, and font weights.

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques.
