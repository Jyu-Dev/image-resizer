Junly Image Auto-Resizer

This document outlines the professional directory structure for the Junly Image Auto-Resizer project. This structure is designed to separate concerns, improve security, and prepare the application for future backend and database integration.

Recommended Directory Structure

When you upload this project to GitHub, create the following folder structure:

junly-image-resizer/
│
├── public/                 # Publicly accessible static assets
│   ├── index.html          # Main HTML entry point
│   ├── favicon.ico         # Website icon
│   └── assets/             # Images, static SVGs, and fonts
│       └── images/
│
├── src/                    # Application source code
│   ├── css/                # Stylesheets
│   │   └── styles.css      # Custom CSS overrides and animations
│   │
│   ├── js/                 # JavaScript logic (Modularized)
│   │   ├── auth.js         # Login, session management, and validation
│   │   ├── ui.js           # DOM manipulation, quotes, toggles, events
│   │   ├── imageWorker.js  # Cropping, upscaling (Pica), HEIC conversion
│   │   ├── batchProcess.js # Queue and batch management logic
│   │   └── app.js          # Main initialization and event listener bindings
│   │
│   └── config/             # Configuration files
│       └── tailwind.config.js 
│
├── backend/                # [FUTURE] Node.js/Python server files
│   ├── server.js           # API Server entry point
│   ├── routes/             # API endpoints (e.g., /api/login, /api/save)
│   ├── controllers/        # Backend business logic
│   └── models/             # Database Schemas (MongoDB/PostgreSQL)
│
├── .gitignore              # Specifies intentionally untracked files to ignore
├── package.json            # Node.js dependencies and build scripts
└── README.md               # Project documentation


How to Migrate the Code

The provided index.html has been meticulously organized with comments acting as dividers. Here is how you map those sections to the folders above:

HTML & Head: Keep the HTML structure in public/index.html. Remove the inline <style> and <script> blocks and replace them with external links:

<link rel="stylesheet" href="../src/css/styles.css">

<script src="../src/js/app.js" defer></script>

CSS: Copy everything between <style> and </style> into src/css/styles.css.

JavaScript: - Move the users object and login click handlers to src/js/auth.js.

Move the Cropper initialization and Pica upscaling logic to src/js/imageWorker.js.

Move the random quote generator and mode switching logic to src/js/ui.js.

Future Database & Security Enhancements

Currently, the application uses front-end hardcoded credentials (users object). For production security:

Backend Auth: Move the authentication to the backend/ folder. Use a database (like PostgreSQL or MongoDB) to store users.

Password Hashing: Passwords must never be stored in plain text. Use bcrypt on the backend to hash passwords.

Session Tokens: Use JWT (JSON Web Tokens) or secure HTTP-only cookies to manage the "Remember Me" session instead of localStorage.

Cloud Storage: Instead of forcing a local download, integrate AWS S3 or Firebase Storage to save processed images securely in the cloud, linked to the user's database record.
