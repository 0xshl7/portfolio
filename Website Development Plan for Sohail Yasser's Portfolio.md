# Website Development Plan for My Portfolio

This document outlines the structure and implementation details for Sohail Yasser's modern portfolio website, built using vanilla HTML, CSS, and JavaScript.

## 1. HTML Structure (index.html)

The `index.html` file will contain the semantic structure of the website, divided into distinct sections as per the requirements. Each section will have a unique ID for navigation and styling purposes.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sohail Yasser - Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <!-- Navigation links -->
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <button id="darkModeToggle">Toggle Dark Mode</button>
        </nav>
    </header>

    <main>
        <section id="hero">
            <!-- Hero content: Name, Title, Summary, Social Links -->
        </section>

        <section id="about">
            <!-- About content: Professional Summary -->
        </section>

        <section id="skills">
            <!-- Skills content: Categories (Security Operations, Networking, Programming, Soft Skills) -->
        </section>

        <section id="projects">
            <!-- Projects grid with cards, each linking to a modal -->
            <div class="project-grid">
                <!-- Project cards -->
            </div>
            <!-- Project Modal Structure -->
            <div id="projectModal" class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <h2 id="modalTitle"></h2>
                    <p id="modalDescription"></p>
                    <!-- Add more details as needed -->
                </div>
            </div>
        </section>

        <section id="experience">
            <!-- Experience/Timeline content: Internship, Education -->
        </section>

        <section id="blog">
            <!-- Blog preview content: Placeholder for future blog posts -->
        </section>

        <section id="contact">
            <!-- Contact form with frontend validation -->
            <form id="contactForm">
                <!-- Form fields: Name, Email, Message -->
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <!-- Footer content: Copyright, Social links (repeated or simplified) -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## 2. CSS Styling (style.css)

The `style.css` file will define the visual presentation, including responsive design and dark mode.

### Global Styles
*   `box-sizing: border-box;`
*   Font definitions (e.g., sans-serif)
*   Base colors for text, background, links.

### Dark Mode Implementation
*   Default will be dark mode.
*   A `body.light-mode` class will override dark mode variables for light mode.
*   CSS variables will be used for colors to easily switch themes:
    ```css
    :root {
        --background-color: #1a1a1a;
        --text-color: #f0f0f0;
        --primary-color: #007bff; /* Accent color */
        --secondary-background: #2a2a2a;
        --border-color: #444;
    }

    body.light-mode {
        --background-color: #f0f0f0;
        --text-color: #1a1a1a;
        --primary-color: #007bff;
        --secondary-background: #ffffff;
        --border-color: #ddd;
    }
    ```

### Responsive Design
*   Mobile-first approach.
*   Media queries for breakpoints (e.g., `max-width: 768px`, `max-width: 1024px`).
*   Flexible units (%, `rem`, `em`, `vw`, `vh`) for sizing.
*   `flexbox` and `grid` for layout.

### Section-Specific Styles
*   **Header/Navigation:** Sticky navigation, responsive menu (hamburger icon for mobile).
*   **Hero:** Centered content, large text for name/title, social icons.
*   **About:** Two-column layout for text and potentially an image/avatar.
*   **Skills:** Grid layout for skill categories, individual skill tags.
*   **Projects:** Responsive grid, card-like design for each project, modal styling (overlay, content box, close button).
*   **Experience/Timeline:** Vertical timeline layout using pseudo-elements.
*   **Blog Preview:** Simple grid for blog post cards.
*   **Contact Form:** Styled input fields, labels, and submit button. Error message styling for validation.
*   **Footer:** Centered text, social icons.

## 3. JavaScript Functionality (script.js)

The `script.js` file will handle all interactive elements and dynamic content.

### Dark Mode Toggle
*   Event listener on `darkModeToggle` button.
*   Function to add/remove `light-mode` class from `body`.
*   Persistence using `localStorage`:
    *   Check `localStorage` on page load to apply saved theme.
    *   Save current theme to `localStorage` on toggle.

### Responsive Navigation
*   Toggle class for mobile navigation menu (e.g., `nav-open`).

### Project Modals
*   Event listeners on project cards to open modal.
*   Populate modal content dynamically based on clicked project data.
*   Event listener on close button and outside modal click to close.

### Contact Form Validation
*   Event listener for form submission.
*   Client-side validation for required fields (name, email, message) and email format.
*   Display error messages next to invalid fields.
*   Prevent default form submission if validation fails.

### Smooth Scrolling
*   Implement smooth scrolling for navigation links (e.g., `scroll-behavior: smooth;` in CSS or JS).

### Dynamic Content Loading (Optional/Future)
*   While not explicitly required for vanilla JS, this could be extended to load project or blog data from a JSON file in the future.

## 4. Content Integration

The provided personal information will be integrated into the respective sections:

*   **Hero:** Sohail Yasser Sayed Abdelsalam, Aspiring SOC Intern, Cairo, Egypt, Email, Phone, LinkedIn, GitHub.
*   **About:** Professional Summary.
*   **Skills:** Security Operations, Networking & Infrastructure, Programming & Scripting, Soft Skills, Certifications.
*   **Projects:** Blockchain-Based Cryptocurrency System, Web Vulnerability Scanner.
*   **Experience:** Information Security Analyst – Internship (Global Knowledge).
*   **Education:** Bachelor of Computer Science (Bani Suef National University).

This plan provides a comprehensive roadmap for developing the portfolio website, ensuring all requirements are met with a modern aesthetic and robust functionality.
