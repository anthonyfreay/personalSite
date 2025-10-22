# personalSite 📸

Personal portfolio website to showcase frontend skillset and photography. This portfolio website is image-focused, featuring a modern React-based architecture with responsive design and optimized performance.

## Quick Start 🚀

```bash
# Clone the repository
git clone https://github.com/anthonyfreay/personalSite.git
cd personalSite

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Table of Contents 📖 <!-- omit in toc -->
- [personalSite 📸](#personalsite-)
  - [Quick Start 🚀](#quick-start-)
  - [Usage 🫡](#usage-)
    - [Live Demo 🖥️](#live-demo-️)
    - [Navigation 📍](#navigation-)
    - [Work Portfolio 💼](#work-portfolio-)
    - [Contact 📧](#contact-)
  - [Technologies Used 🧑🏽‍💻](#technologies-used-)
    - [Core Technologies](#core-technologies)
    - [Key Libraries \& Features](#key-libraries--features)
    - [Development \& Deployment](#development--deployment)
    - [Architecture Patterns](#architecture-patterns)
  - [Installation 🛠️](#installation-️)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Build 🧱](#build-)
  - [Deployment 🚚](#deployment-)
    - [Local Development 📦](#local-development-)
    - [Production Deployment 🚀](#production-deployment-)
      - [Prerequisites](#prerequisites-1)
      - [Deploy to GitHub Pages](#deploy-to-github-pages)
      - [Alternative Deployment Options](#alternative-deployment-options)
  - [Project Structure 🩻](#project-structure-)
    - [Key Architecture Features](#key-architecture-features)
  - [Available Scripts 📜](#available-scripts-)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run deploy`](#npm-run-deploy)
    - [`npm run eject`](#npm-run-eject)
  - [Features ✨](#features-)
  - [Troubleshooting 🔧](#troubleshooting-)
    - [Common Issues](#common-issues)
  - [Contributing 👨🏽‍🤝‍👨🏾](#contributing-)
  - [Credits 👏🏼](#credits-)
    - [Core Dependencies](#core-dependencies)
    - [Development Dependencies](#development-dependencies)
  - [License 👩🏽‍⚖️](#license-️)


## Usage 🫡

### Live Demo 🖥️
View the deployed portfolio website at https://anthonyfreay.com.

### Navigation 📍

The landing page offers social media links, resume, and buttons to access work and contact sections.
    
A top navigation bar provides access to `Home`, `Work`, `Prints` (external), and `Contact`.
    
A secondary navigation bar appears on the Work page and gallery pages displaying specific photo galleries and Contact.

### Work Portfolio 💼

The `/work` page showcases your photography categorized by style (`Live`, `People`, `Events`, etc.).
    
Within the individual galleries, lower-resolution thumbnails link to high-resolution lightbox versions.
    
Lightbox navigation allows you to browse pictures and exit using the `"x"` button or clicking the background.

### Contact 📧

Displays profile picture, brief bio, and a professional contact form.

## Technologies Used 🧑🏽‍💻

### Core Technologies
- **React 18.2** - Modern JavaScript library for building user interfaces
- **React Router DOM 6.20** - Declarative routing for React applications
- **React Bootstrap 2.9** - Bootstrap components built with React
- **Bootstrap 5.3** - CSS framework for responsive design

### Key Libraries & Features
- **@formspree/react** - Contact form integration
- **react-ga4** - Google Analytics 4 integration for tracking
- **react-helmet-async** - Dynamic document head management for SEO
- **react-icons** - Popular icon library
- **react-lazy-load-image-component** - Lazy loading for images to improve performance
- **react-masonry-css** - Masonry grid layout for photo galleries
- **yet-another-react-lightbox** - Modern lightbox component for image viewing

### Development & Deployment
- **React Scripts 5.0** - Create React App build tooling
- **gh-pages** - Automated deployment to GitHub Pages
- **Web Vitals** - Performance monitoring

### Architecture Patterns
- **Lazy Loading** - Code splitting for optimal performance
- **Component-Based Architecture** - Reusable and maintainable components
- **HashRouter** - Client-side routing compatible with GitHub Pages
- **Responsive Design** - Mobile-first approach using Bootstrap grid system

## Installation 🛠️

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personalSite.git
   cd personalSite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages listed in `package.json`, including React, React Router, Bootstrap, and other dependencies.

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will automatically open in your browser at [http://localhost:3000](http://localhost:3000).

## Build 🧱

To create an optimized production build of the website:

```bash
npm run build
```

This command:
- Creates a `build/` directory with optimized production files
- Minifies JavaScript and CSS for faster loading
- Optimizes images and assets
- Generates static files ready for deployment

The build folder will contain all the files needed to deploy your website to any static hosting service. 

## Deployment 🚚

### Local Development 📦

To run the website locally for development:

```bash
npm start
```

This command:
- Starts the development server on [http://localhost:3000](http://localhost:3000)
- Enables hot reloading (changes appear automatically)
- Shows lint errors and warnings in the console
- Opens the app in your default browser

Press `Ctrl+C` in the terminal to stop the development server.

### Production Deployment 🚀

This project is configured to deploy to **GitHub Pages** using the `gh-pages` package.

#### Prerequisites

1. Ensure you have a GitHub repository set up
2. The `gh-pages` package is already included in `devDependencies`
3. Update the `homepage` field in `package.json` to match your domain or GitHub Pages URL

#### Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
1. Runs `npm run build` to create an optimized production build
2. Pushes the contents of the `build/` directory to the `gh-pages` branch
3. Makes your site available at the URL specified in the `homepage` field

**Note:** The first deployment may take a few minutes to become available.

#### Alternative Deployment Options

The production build in the `build/` folder can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build/` folder or connect your Git repository
- **Vercel**: Import your repository and deploy with zero configuration
- **AWS S3**: Upload the `build/` folder to an S3 bucket configured for static hosting
- **Firebase Hosting**: Use `firebase deploy` after configuring Firebase
- **Custom Server**: Copy the `build/` folder contents to your web server's public directory

## Project Structure 🩻

The project follows a modular React architecture with clear separation between pages and reusable components:

```
personalSite/
├── public/                          # Static assets and images
│   ├── apparel/                     # Apparel photography gallery images
│   ├── bw/                          # Black & white photography images
│   ├── cars/                        # Automotive photography images
│   ├── covers/                      # Cover/featured images
│   ├── events/                      # Event photography images
│   ├── favicon_io/                  # Favicon files
│   ├── live/                        # Live performance photography
│   ├── me/                          # Personal/profile images
│   ├── people/                      # Portrait photography
│   ├── places/                      # Landscape/location photography
│   ├── posters/                     # Poster designs
│   ├── 404.html                     # Custom 404 error page
│   ├── anthony_freay_resume.pdf     # Resume PDF
│   ├── favicon.ico                  # Site favicon
│   ├── index.html                   # HTML template
│   └── robots.txt                   # Search engine crawler instructions
│
├── src/                             # React source code
│   ├── Components/
│   │   ├── Pages/                   # Page-level components (routes)
│   │   │   ├── Apparel/            # Apparel gallery page
│   │   │   ├── BlackWhite/         # B&W gallery page
│   │   │   ├── Cars/               # Cars gallery page
│   │   │   ├── Contact/            # Contact form page
│   │   │   ├── Events/             # Events gallery page
│   │   │   ├── EverettStudios/     # Everett Studios page
│   │   │   ├── Home/               # Landing page
│   │   │   ├── Live/               # Live performance gallery
│   │   │   ├── People/             # People gallery page
│   │   │   ├── Places/             # Places gallery page
│   │   │   ├── Posters/            # Posters gallery page
│   │   │   ├── Resume/             # Resume page
│   │   │   └── Work/               # Work portfolio overview
│   │   │
│   │   └── Util/                    # Reusable utility components
│   │       ├── ContactForm/         # Contact form component
│   │       ├── Footer/              # Footer component
│   │       ├── Icons/               # Social media icons
│   │       ├── ImageGallery/        # Image gallery component
│   │       ├── Lightbox/            # Lightbox viewer for images
│   │       ├── MasonryImageGallery/ # Masonry-style gallery layout
│   │       ├── Navbar/              # Navigation bar component
│   │       └── PageHeader/          # Page header component
│   │
│   ├── App.css                      # Global app styles
│   ├── App.jsx                      # Main app component with routing
│   ├── index.css                    # Root styles
│   ├── index.js                     # React app entry point
│   ├── reportWebVitals.js          # Performance monitoring
│   └── setupTests.js               # Test configuration
│
├── .gitignore                       # Git ignore rules
├── package.json                     # Project dependencies and scripts
├── package-lock.json               # Locked dependency versions
└── README.md                        # This file
```

### Key Architecture Features

- **Lazy Loading**: Components are lazy-loaded using `React.lazy()` for improved performance
- **React Router**: Uses `HashRouter` for client-side routing
- **Component-Based**: Modular design with reusable utility components
- **Responsive Design**: Built with Bootstrap and React Bootstrap for mobile-first responsiveness
- **SEO Optimized**: Uses `react-helmet-async` for dynamic meta tags
- **Analytics**: Integrated with Google Analytics 4 via `react-ga4`

## Available Scripts 📜

In the project directory, you can run the following npm scripts:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- Hot reloading enabled
- Lint errors shown in console
- Automatically opens in browser

### `npm test`
Launches the test runner in interactive watch mode.
- Runs all test files
- Re-runs tests on file changes
- Shows test coverage

### `npm run build`
Creates an optimized production build in the `build/` folder.
- Minifies code for best performance
- Optimizes assets and images
- Generates static files ready for deployment
- Includes source maps for debugging

### `npm run deploy`
Builds and deploys the app to GitHub Pages.
- Automatically runs `npm run build`
- Pushes to `gh-pages` branch
- Updates live site at configured homepage URL

### `npm run eject`
⚠️ **Warning: This is a one-way operation!**

Ejects from Create React App, giving you full control over webpack, Babel, ESLint, etc. Only use if you need custom configuration that CRA doesn't support.

## Features ✨

- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **🖼️ Image Galleries** - Multiple photography galleries with category organization
- **🔍 Lightbox Viewer** - High-resolution image viewing with smooth navigation
- **⚡ Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **📊 Analytics Integration** - Track visitor behavior with Google Analytics 4
- **📧 Contact Form** - Integrated contact form powered by Formspree
- **🎨 Modern UI** - Clean, professional design with Bootstrap components
- **🔗 Social Media Integration** - Links to social profiles and external portfolio
- **📄 Resume Access** - Direct PDF resume download
- **🎭 Masonry Layout** - Pinterest-style photo grid for visual appeal
- **♿ Accessible** - Built with web accessibility best practices
- **🔒 SEO Friendly** - Dynamic meta tags and proper semantic HTML

## Troubleshooting 🔧

### Common Issues

**Port 3000 already in use**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or specify a different port
PORT=3001 npm start
```

**Dependencies installation fails**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build fails**
```bash
# Check Node.js version (should be v14+)
node --version

# Update React Scripts if needed
npm install react-scripts@latest
```

**Images not loading**
- Ensure images are in the correct `public/` subdirectories
- Check image file paths and extensions
- Verify image files are not corrupted

**Deployment to GitHub Pages fails**
- Verify the `homepage` field in `package.json` is correct
- Ensure you have push access to the repository
- Check that the `gh-pages` branch exists and is configured in repository settings

## Contributing 👨🏽‍🤝‍👨🏾

If you'd like to contribute to this project, please follow these guidelines.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## Credits 👏🏼

This project uses the following third-party libraries:

### Core Dependencies

- **@formspree/react**: ^2.5.1
- **@testing-library/jest-dom**: ^5.17.0
- **@testing-library/react**: ^13.4.0
- **@testing-library/user-event**: ^13.5.0
- **bootstrap**: ^5.3.2
- **react**: ^18.2.0
- **react-bootstrap**: ^2.9.1
- **react-dom**: ^18.2.0
- **react-ga4**: ^2.1.0
- **react-helmet-async**: ^2.0.5
- **react-icons**: ^4.12.0
- **react-lazy-load-image-component**: ^1.6.0
- **react-masonry-css**: ^1.0.16
- **react-router-dom**: ^6.20.1
- **react-scripts**: ^5.0.1
- **web-vitals**: ^2.1.4
- **yet-another-react-lightbox**: ^3.15.6

### Development Dependencies

- **@babel/plugin-proposal-private-property-in-object**: ^7.21.11
- **gh-pages**: ^6.1.1


## License 👩🏽‍⚖️

This project's source code is licensed under the [MIT License](LICENSE). 

However, all photographic assets, including images in the `public/` directory and any other visual media contained within the project, are copyrighted and may not be used without explicit permission.