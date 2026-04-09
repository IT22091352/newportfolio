# Website Documentation

## Overview

This project is a personal portfolio website for **Chathuka Dilakshana**. It is built as a single-page React application with smooth scrolling navigation, animated section reveals, a dark visual theme, contact options, and a project showcase.

The site is focused on presenting professional identity, technical skills, education, work experience, selected projects, and contact methods in a polished portfolio format.

## Live Page Structure

The main application renders the following sections in order:

1. Navbar
2. Hero
3. About
4. Skills
5. Experience
6. Projects
7. Contact
8. Footer
9. Floating WhatsApp button

The application also includes a dedicated 404 page for unknown routes.

## Routing

The app uses React Router.

- `/` - main portfolio page
- `/notfound` - custom 404 page
- `*` - fallback to the 404 page for any unmatched route

Some project demo links also intentionally point to `/notfound` when a live demo is not available.

## Section Breakdown

### Navbar

The navigation bar is fixed at the top and includes links to:

- Home
- About
- Skills
- Experience
- Projects
- Contact

Features:

- Mobile hamburger menu
- Scroll progress indicator
- Smooth anchor scrolling
- Active link highlighting

### Hero

The hero section is the first visual area of the site and includes:

- A background hero image
- The title `Intern Software Engineer`
- The main headline about building elegant digital products
- The owner name `Chathuka Dilakshana`
- Rotating role labels:
  - Software Engineer
  - Web Developer
  - UI/UX Designer
  - Full Stack Engineer
- Primary buttons to jump to Projects and Contact
- GitHub and LinkedIn social links
- A profile image card on large screens

### About

The About section presents a short professional summary and a portrait image.

Content included:

- BSc (Hons) Information Technology student at SLIIT
- Skills in Java, JavaScript, Spring Boot, MERN stack, and Tailwind CSS
- Goal of securing a software engineering internship
- Highlight list covering:
  - 4th year undergraduate status
  - Specialization in Information Technology
  - Internship experience at Apps Technologies
  - Certifications in Python and Web Design from the University of Moratuwa
- A resume download link

### Skills

This section shows skill categories with progress bars and a technology tag cloud.

Categories:

- Programming Languages
- Frameworks
- Other Skills

Listed skills include:

- Java
- JavaScript
- Python
- HTML/CSS
- Kotlin
- PHP
- React.js
- Node.js
- Express.js
- MongoDB
- Spring Boot
- Tailwind CSS
- Creativity
- Adaptability
- Communication
- Resilience
- Teamwork
- Problem Solving

The additional technology list includes:

- AI/ML
- Visual Studio Code
- UI/UX Design
- Android Studio
- REST APIs
- Material UI
- Figma
- Vercel
- Git/GitHub
- Netlify
- MySQL

### Experience

This section is organized as tabs with three views:

- Education
- Work Experience
- Certifications

Education entries:

- Bachelor of Information Technology at Sri Lanka Institute of Information Technology (SLIIT)
- Diploma in English at Britishway English Academy
- A/L Maths Stream at ST/ALOYSIUS COLLEGE

Work experience entry:

- Software Engineer Intern at Apps Technologies

Certification entries:

- Python for Beginners from University of Moratuwa
- Web Design for Beginners from University of Moratuwa

### Projects

This section is a project gallery with category filters.

Available filters:

- All
- Frontend
- Fullstack
- Mobile
- Data

Featured projects shown in the current data set:

- Mobile Gaming App
  - Android gaming app built with Kotlin
  - Uses Android Studio, Kotlin, UI/UX design, and view binding

- Tourist Management System
  - MERN-based system for bookings, reviews, and personalized itineraries
  - Demo currently routes to the custom 404 page

- Review Analysis Project
  - Machine learning sentiment analysis project for product reviews
  - Uses text preprocessing, CountVectorizer, TF-IDF, and ML models

- Portfolio Website
  - Responsive portfolio site built with React.js, Next.js, Tailwind CSS, and Framer Motion
  - Demo link points to the live portfolio domain

- Smart Note App
  - Mobile note management application
  - Uses Kotlin, Room database, MVVM, and Material Design

- Hotel Reservation Website
  - Booking-oriented website for hotel reservations
  - Demo currently routes to the custom 404 page

- Online Book Hub
  - Book discovery and exploration web application
  - Uses React, MongoDB, Node.js, Express.js, HTML/CSS, and Bootstrap

Each project card includes:

- Image
- Short description
- Technology tags
- Live demo button
- GitHub repository button

### Contact

The contact section contains both static contact details and an email form.

Contact details shown on the site:

- Email: chathukadilakshana33@gmail.com
- Phone: 0703749261 / 0781122261
- WhatsApp: +94703749261
- GitHub profile link
- LinkedIn profile link

The email form collects:

- Full name
- Email address
- Subject
- Message

The form is integrated with EmailJS and includes success and error feedback messages.

There is also a WhatsApp message shortcut button for direct messaging.

### Footer

The footer repeats the personal branding and adds:

- Copyright year
- GitHub and LinkedIn links
- A `Back to top` anchor link

### Floating WhatsApp Button

A fixed WhatsApp button remains visible in the bottom-right corner.

It opens a prefilled WhatsApp chat message for quick contact.

### 404 Page

The custom not-found page provides:

- Large `404` heading
- Page not found message
- Link back to the homepage

## Visual System

The design uses a modern dark-forward portfolio style with glassmorphism accents.

Main visual traits:

- Dark default theme
- Cyan and slate color palette
- Soft gradients and layered background effects
- Rounded cards and pill buttons
- Smooth motion and staggered reveals
- Floating WhatsApp action button

Typography setup:

- `Sora` for headings
- `Manrope` for body text
- `JetBrains Mono` for code styling

## Theme Behavior

Theme handling is intentionally locked to dark mode.

- The app always adds the `dark` class to the document root
- `ThemeContext` keeps `darkMode` set to `true`
- The toggle API exists, but it behaves as a no-op so the site stays dark

This means the site is visually consistent and does not switch to a light mode in the current implementation.

## Shared Animation Helpers

The app uses reusable Framer Motion variants from `src/utils/motionVariants.js`.

Available motion patterns:

- `sectionStagger`
- `revealUp`
- `revealLeft`
- `revealRight`
- `popIn`

These are used to create section entrance animations and consistent motion language.

## Components Present in the Codebase

### Actively Used Components

- Navbar
- Hero
- About
- Skills
- Experience
- Projects
- Contact
- Footer
- WhatsAppFloat
- NotFound

### Present But Not Mounted In The Current App Flow

- Blog
- ThemeToggle
- ParticlesBackground
- TechBadge

These files exist in the repository but are not currently imported into the main page flow shown in `App.js`.

## Technologies Used

Frontend and tooling:

- React 19
- React Router DOM
- Framer Motion
- React Scroll
- Tailwind CSS
- PostCSS
- Autoprefixer

Form and interactive services:

- EmailJS

Background animation libraries present in the dependency list:

- react-tsparticles
- tsparticles
- tsparticles-slim

## Configuration

Email form configuration can be supplied through environment variables.

Expected variables:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

The contact form also contains fallback values in code, so it can still run during development if the environment file is incomplete.

## Asset References

The site references several local and remote assets.

Local assets referenced in the code:

- `/assets/pictures/profilePIC1.JPG`
- `/assets/pictures/about1.jpg`
- `/assets/pictures/portfolio.png`
- `/assets/projects/certificate/Chathuka Dilakshana Resume.pdf`

Remote assets:

- Unsplash hero and project images
- LinkedIn and GitHub profile URLs

## Scripts

Available npm scripts:

- `npm start` - run the development server
- `npm run build` - create a production build
- `npm test` - run the test suite
- `npm run eject` - eject from Create React App

## Notes

- The current test file still contains the default Create React App example test and does not yet reflect the portfolio UI.
- The codebase contains both live UI code and unused exploratory components.
- The site is portfolio-first, not blog-first, even though a Blog component exists in the repository.

## Short Summary

This website is a personal developer portfolio that highlights:

- Identity and branding
- Technical skills
- Education and certifications
- Internship experience
- Selected projects
- Direct contact options through email and WhatsApp

It is built to feel polished, responsive, and visually modern, with motion-based presentation and a strong dark aesthetic.