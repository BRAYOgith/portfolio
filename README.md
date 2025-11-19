Portfolio Website
A modern, responsive portfolio website built with HTML, CSS, JavaScript, and PHP, showcasing projects and professional information.

Project Overview
This is a fully responsive portfolio website designed to showcase professional work, skills, and projects. Built with a mobile-first approach and modern web development practices.

Technologies Used
Frontend
HTML5 - Semantic markup and structure

CSS3 - Modern styling with Flexbox/Grid

JavaScript (ES6+) - Interactive functionality

Responsive Design - Mobile-first approach

Backend & Tools
PHP - Server-side functionality

XAMPP - Local development environment

Git - Version control

GitHub - Code repository and deployment

Project Structure
text
portfolio_site/
├── index.html                 # Homepage
├── about.html                 # About me page
├── projects.html              # Projects showcase
├── contact.php               # Contact form with PHP processing
├── assets/                   # All static assets
│   ├── css/
│   │   ├── style.css         # Main stylesheet
│   │   ├── responsive.css    # Responsive styles
│   │   └── animations.css    # CSS animations
│   ├── js/
│   │   ├── main.js           # Main JavaScript functionality
│   │   ├── animations.js     # Interactive animations
│   │   └── form-validation.js # Form validation
│   ├── images/
│   │   ├── logo.png          # Site logo
│   │   ├── hero-bg.jpg       # Hero section background
│   │   ├── projects/         # Project screenshots
│   │   └── icons/            # UI icons and favicons
│   └── fonts/
│       └── custom-fonts/     # Custom typography
├── includes/                 # PHP includes
│   ├── header.php           # Site header
│   ├── footer.php           # Site footer
│   └── config.php           # Database configuration
├── templates/               # Reusable components
│   ├── project-card.html    # Project display template
│   └── skill-item.html      # Skills display template
├── README.md               # Project documentation
└── .gitignore             # Git ignore rules
⚙️ Setup Instructions
Prerequisites
XAMPP (Apache + PHP)

Web browser

Code editor (VS Code recommended)

Local Development Setup
Install XAMPP

Download and install XAMPP from https://www.apachefriends.org/

Start Apache server from XAMPP Control Panel

Project Setup

bash
# Clone the repository
git clone https://github.com/BRAYOgith/portfolio.git

# Navigate to project directory
cd portfolio_site

# Place in XAMPP htdocs folder
C:\xampp\htdocs\portfolio_site\
Access the Website

Open browser and navigate to: http://localhost/portfolio_site

GitHub Deployment
bash
# Initialize Git repository
git init

# Add project files
git add index.html about.html projects.html contact.php
git add assets/ includes/ templates/

# Initial commit
git commit -m "Initial portfolio website commit"

# Connect to GitHub
git remote add origin https://github.com/BRAYOgith/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
Features
Core Features
Fully responsive design

Modern UI/UX with smooth animations

Contact form with PHP backend

Project showcase gallery

Skills and experience sections

Cross-browser compatibility

Technical Features
Semantic HTML5 markup

CSS3 with Flexbox/Grid layouts

Vanilla JavaScript ES6+

PHP form handling

Mobile-first responsive design

Optimized images and assets

Responsive Breakpoints
Mobile: < 768px

Tablet: 768px - 1024px

Desktop: > 1024px

Customization
Adding New Projects
Edit projects.html and add project entries in the projects section:

html
<div class="project-card">
    <img src="assets/images/projects/new-project.jpg" alt="New Project">
    <h3>Project Title</h3>
    <p>Project description</p>
    <div class="tech-stack">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
    </div>
</div>
Modifying Styles
Main styles: assets/css/style.css

Responsive styles: assets/css/responsive.css

Animations: assets/css/animations.css

Updating Contact Form
Edit contact.php to modify form fields or processing logic.

Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Contact & Support
For questions or support:

Email: njokibrianmacharia@gmail.com

GitHub: BRAYOgith

Portfolio: http://localhost/portfolio_site

License
This project is open source and available under the MIT License.

Future Enhancements
Database integration for projects

Blog section

Dark mode toggle

Multi-language support

PWA capabilities

SEO optimization

Developed with ❤️ using modern web technologies
