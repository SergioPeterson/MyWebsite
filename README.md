# Personal Portfolio Website

This repository contains the source code for my personal portfolio website. The website serves as a platform to showcase my projects, skills, and growth as a developer. Built with **React** and **Tailwind CSS**, it is designed to be visually appealing, responsive, and easy to maintain. The site is hosted on **GitHub Pages** for seamless deployment.

---

## Features

- **Project Showcase**:
  - Highlights key projects with images and descriptions.
  - Links to live demos and GitHub repositories.

- **About Section**:
  - Provides an overview of my background, interests, and skills.

- **Blog Section**:
  - Contains posts reflecting on my experiences, learning, and updates (currently under revision).

- **Responsive Design**:
  - Ensures optimal viewing experience across devices (mobile, tablet, desktop).

- **Dynamic Updates**:
  - Regularly updated to include new projects and achievements.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Deployment](#deployment)
5. [Customization](#customization)
6. [Screenshots](#screenshots)
7. [Technologies Used](#technologies-used)
8. [Contributing](#contributing)
9. [License](#license)

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (16+)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/SergioPeterson/MyWebsite.git
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

---

## Usage

- Update project details in `src/projects`.
- Modify the about section in `src/about`.
- Add or update blog posts in the `src/blog` directory.

---

## Project Structure

```plaintext
my-website/
├── public/              # Static assets like images
├── src/
│   ├── about/          # About section components
│   ├── blog/           # Blog components
│   ├── homepage/       # Home page components
│   ├── other/          # Other pages
│   ├── projects/       # Project showcase components
│   ├── App.tsx         # Main app component
│   ├── index.tsx       # React entry point
├── tailwind.config.ts  # Tailwind CSS configuration
├── package.json        # Dependencies and scripts
├── vite.config.mjs     # Vite configuration
└── README.md           # Documentation
```

---

## Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Deploy the `dist/` directory to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## Customization

1. **Theme**:
   - Modify the Tailwind CSS theme in `tailwind.config.ts` to change colors, fonts, and other styles.

2. **Content**:
   - Add or edit content in the `src` directory.

3. **Icons and Images**:
   - Replace assets in the `public/` directory as needed.

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS
- **Build Tool**:
  - Vite
- **Hosting**:
  - GitHub Pages

---

## Contributing

Contributions are welcome! If you have suggestions for improvement or new features, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

