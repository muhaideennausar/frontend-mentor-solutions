# Frontend Mentor - Base Apparel Coming Soon solution

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)
![Responsive](https://img.shields.io/badge/responsive-%23000000.svg?style=for-the-badge&logo=responsive-design&logoColor=white)

## Overview

This is a solution to the [Base Apparel Coming Soon challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Screenshot links

- [📸 Desktop screenshot](./screenshots/desktop-screenshot.png) – opens in a new tab
- [📱 Mobile screenshot](./screenshots/mobile-screenshot.png) – opens in a new tab

> Screenshots are stored in the `/screenshots` folder.

### Links

- **Solution repository:** [GitHub repo](https://github.com/muhaideennausar/frontend-mentor-solutions/tree/main/base-apparel/)
- **Live site URL:** [Live demo](https://muhaideennausar.github.io/frontend-mentor-solutions/base-apparel/)

## Built with

- Semantic HTML5 markup
- CSS Grid & Flexbox layout
- Mobile-first workflow
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- Vanilla JavaScript - For client-side form validation
- The HTML `<picture>` element for responsive art direction

## What I learned

- **Macro/Micro Layouts:** Using CSS Grid (`grid-cols-[1fr_auto]`) for the main wrapper to handle the desktop split, while utilizing Flexbox for the inner content alignment.
- **Art Direction with HTML:** Implementing the `<picture>` element to dynamically swap between mobile and desktop hero images at the `768px` breakpoint, letting the browser handle image fetching instead of relying on CSS background hacks.
- **Advanced Form Styling:** Moving away from standard Flexbox constraints and using `absolute` positioning to perfectly overlap the submit button over the right edge of the input field.
- **SVG Preservation:** Utilizing Tailwind's `shrink-0` utility to prevent inline SVGs (like the error icon) from being crushed when flex containers run out of space.
- **Client-Side Validation:** Writing custom JavaScript with Regular Expressions (Regex) to validate email inputs, intercepting the standard form submission with `event.preventDefault()`, and dynamically toggling Tailwind's `hidden` utility class based on success or failure.

## Continued development

- Add smooth transition animations for the appearance and disappearance of the error icon and message.
- Implement a backend integration or serverless function to actually capture and process the submitted email addresses.

## Useful resources

- [Josefin Sans on Google Fonts](https://fonts.google.com/specimen/Josefin+Sans) – The primary typeface used in the challenge.
- [MDN Web Docs: The Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) – Essential guide on how to properly swap images based on viewport width.
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) – Reference for the new V4 engine, including the `@theme` directive and updated utility classes.
- [Regexr](https://regexr.com/) - A great tool to learn, build, and test Regular Expressions for form validation.

## Author

- **GitHub** – [@muhaideennausar](https://github.com/muhaideennausar)
- **Frontend Mentor** – [@muhaideennausar](https://www.frontendmentor.io/profile/muhaideennausar)

## Acknowledgments

Thanks to Frontend Mentor for the design and the open‑source community for sharing responsive techniques.
