# Trackody SaaS Application

Welcome to the repository for Trackody SaaS Application, a cloud-based software solution for marketing whales to view performance of campaigns.. This repository contains the source code for the application, which is built on React using Vite as the module bundler, Tailwind and PostCSS for styling, and ESLint for code quality.

## Getting Started
To get started with the application, follow these steps:

Clone the repository to your local machine using git clone https://github.com/napstar-420/trackody-saas-app.git.
Navigate to the root directory of the project in your terminal.
Run `npm install` to install all dependencies.
Run `npm run dev` to start the development server.
Open your browser and go to http://localhost:4531 to see the application running.

## Development
Tech Stack
The application is built on the following tech stack:

- React
- Vite
- Tailwind and PostCSS
- ESLint
- Laravel 

## Folder Structure
The application has the following folder structure:

> trackody-saas-app/  
├── public/  
│   ├── index.html  
│   └── ...  
├── src/  
│   ├── components/  
│   │   ├── Header.jsx  
│   │   └── ...  
│   ├── pages/  
│   │   ├── Home.jsx  
│   │   └── ...  
│   ├── styles/  
│   │   ├── index.css  
│   │   └── ...  
│   ├── App.jsx  
│   ├── index.jsx  
│   └── ...  
├── .eslintrc.js  
├── .gitignore  
├── package.json  
├── postcss.config.js  
└── vite.config.js  

**public/** - Contains the index HTML file and any other static assets.  
**src/** - Contains the source code for the application.  
**src/components/** - Contains reusable components used throughout the application.  
**src/pages/** - Contains the top-level pages for the application.  
**src/styles/** - Contains the global styles for the application.  
**src/index.jsx** - The entry point of the application.  
**.eslintrc.js** - Configuration file for ESLint.  
.**gitignore** - Specifies which files and folders should be ignored by Git.  
**package.json** - Contains the dependencies and scripts for the application.  
**postcss.config.js** - Configuration file for PostCSS.  
**vite.config.js** - Configuration file for Vite.  

## Scripts
The following scripts are available for development:  

`npm run dev` - Starts the development server.  
`npm run build` - Builds the application for production.  
`npm run lint` - Lints the code using ESLint.  

## Styling
The application uses Tailwind and PostCSS for styling. The global styles are located in src/styles/index.css. Tailwind classes can be used throughout the application by importing them into individual components.

## Code Quality
The application uses ESLint for code quality. The configuration is located in .eslintrc.js. The npm run lint command can be used to check the code for errors and warnings.

## Deployment
To deploy the application, run npm run build to create a production-ready build of the application. The build files will be located in the dist/ folder. You can then deploy the application to your preferred hosting provider.

## Conclusion
Thank you for checking out Trackody SaaS Application. We hope this README has been helpful in getting started with the application. If you have any questions or feedback, please contact us.
