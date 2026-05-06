# Closure Point Solutions

Welcome to the Closure Point Solutions website repository! This is a modern, fully responsive landing page built for a business specializing in Vendor Management, Expert Recruitment, and Reliable Manpower Supply.

## 🚀 Features

*   **Premium Hero Animation:** Cascading slide-up text entrance with a high-contrast shimmering gradient BRAND highlight ("Closure Point Solutions"). Now includes an interactive 3D **Particle Cloud Network** background powered by React Three Fiber.
*   **Legal Compliance Suite:** Independent, dedicated pages for **Disclaimer**, **Privacy Notice**, **Cookie Policy**, and **Terms of Service**, modeled after Quess Corp standards.
*   **Cookie Consent system:** A global, persistent consent banner with `localStorage` memory to ensure privacy compliance.
*   **Enterprise Routing:** Integrated `react-router-dom` to support independent legal pages while maintaining the smooth "One Page" feel of the main landing page.
*   **SEO & Analytics:** 
    *   Integrated **Google Tag Manager** (container system).
    *   Integrated **Google Analytics (GA4)** for traffic tracking.
    *   Integrated **Google Search Console** for search visibility.
    *   Optimized SEO meta tags and social media Open Graph cards.
*   **Vendor Management Section:** Displays dynamic, animated statistics and mock UI for active vendors, compliance scores, and risk assessment.
*   **Recruitment & Manpower Services:** Categorized service offerings with staggered entry animations and an **auto-scrolling continuous marquee** for manpower categories.
*   **Premium UI/UX:** 
    *   **Mobile-First Design:** Fully responsive with a custom animated hamburger-to-X navigation toggle.
    *   **Glassmorphism UI:** Modern frosted glass panels, vibrant "Pista & Mid-Green" aesthetic backgrounds, and smooth transitions.
    *   **Live Chat:** Integrated **JivoChat** widget for real-time customer support.
    *   **Scroll Animations:** Powered by `aos` (Animate On Scroll) for a professional, fluid feel.

## 🛠️ Tech Stack

*   **Framework:** React 19 + Vite
*   **Routing:** React Router v7
*   **3D Graphics:** Three.js, React Three Fiber, React Three Drei
*   **Styling:** Custom CSS (Flexbox/Grid, CSS Variables, Glassmorphism)
*   **Icons:** Lucide React
*   **Tracking:** Google Tag Manager, Analytics, Search Console

## 📂 Project Structure

```text
closure-point-solutions/
├── public/                 # Static assets (logos, icons)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── CookieConsent/  # Global cookie banner & styles
│   │   ├── Header/         # Animated navigation
│   │   ├── Footer/         # Contact forms & legal links
│   │   ├── Hero/           # Animated brand title & badge
│   │   └── ...             # Sections (Vendor, Recruitment, etc.)
│   ├── pages/              # Standalone page views
│   │   ├── Home.jsx        # Main landing page wrapper
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   ├── CookiePolicy.jsx
│   │   └── Disclaimer.jsx
│   ├── App.jsx             # Main routing configuration
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles and background animations
├── index.html              # HTML template with GTM & GSC integration
└── package.json            # Project dependencies and scripts
```

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ajf013/closure-point-solutions.git
   ```
2. Navigate into the directory:
   ```bash
   cd closure-point-solutions
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the local development server, run:
```bash
npm run dev
```
Then, open your browser and access `http://localhost:5173`.

### Building for Production
To create an optimized production build, run:
```bash
npm run build
```

## 📬 Contact

*   **Email:** closurepointsolutions@gmail.com
*   **Phone:** +91 91138 11578
