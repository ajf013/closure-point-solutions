# Closure Point Solutions

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)
![Node](https://img.shields.io/badge/Node-22-green)

**Closure Point Solutions (CPS)** is a premium talent solutions platform. This repository includes the main website, an AI-powered lead collection chatbot, and a dedicated Live Agent Portal.

---

## 🤖 AI Chatbot & Live Agent System

### 🚀 Features
*   **Intelligent Lead Collection**: Automatically collects Name, Mobile, Email, and Service requirements.
*   **Live Agent Handoff**: Users can skip the bot and talk to a human agent at any time.
*   **Agent Portal**: A dedicated, isolated interface for staff to manage incoming chats.
*   **Assignment System**: Support for multiple agents with "Accept Chat" ownership logic.
*   **Lead Storage**: All collected leads are automatically saved to `leads.json` on the server.
*   **PWA Enabled**: The Agent Portal can be installed as an app on Android/iOS for mobile access.

### 📂 Chatbot Structure
*   `chatbot-backend/`: Node.js + Socket.io server.
*   `src/components/ChatWidget.jsx`: The floating chat UI for visitors.
*   `src/pages/AgentPortal.jsx`: The dashboard for your support team.

---

## 🛠️ Tech Stack

*   **Frontend**: React 19, Vite 6, Socket.io-client
*   **Backend**: Node.js, Express, Socket.io
*   **AI**: Azure OpenAI Service (GPT-4o)
*   **Hosting**: Azure App Service (Backend)

---

## 📂 Project Structure

```text
src/
├── components/         # ChatWidget, Hero, Services, etc.
├── pages/              # Home, AgentPortal, Legal pages
├── assets/             # Static images and logos
chatbot-backend/        # Node.js Backend Server
├── server.js           # Main logic & Lead Collection
├── leads.json          # Persistent lead storage (Protected)
└── .env                # Environment variables (Protected)
```

---

## 📦 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ajf013/closure-point-solutions.git
   cd closure-point-solutions
   ```

2. **Setup Frontend**
   ```bash
   npm install
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd chatbot-backend
   npm install
   # Create a .env file with your AZURE_OPENAI credentials
   node server.js
   ```

---

## 📱 Agent Portal Access (PWA)

The Agent Portal is accessible at `/agent-portal`.

**How to install on Mobile:**
1. Open your browser and navigate to `https://closurepointsolutions.com/agent-portal`.
2. **iOS**: Tap the "Share" icon and select "Add to Home Screen".
3. **Android**: Tap the three dots and select "Install App" or "Add to Home Screen".
4. The portal will now appear as a standalone app with the CPS logo!

---

## 📬 Contact & Support

*   **Website**: [closurepointsolutions.com](https://closurepointsolutions.com)
*   **Email**: closurepointsolutions@gmail.com
*   **Phone**: +91 91138 11578

© 2026 Closure Point Solutions. All rights reserved.
