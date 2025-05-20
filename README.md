# 🎙️ AI Interviewer App – PrepPal

[🔗 Live Demo](https://ai-interviewer-is1vpmrxa-keaton-nordbys-projects.vercel.app)

**PrepPal** is an innovative AI-powered platform designed to help users prepare for tech job interviews. By simulating realistic interview scenarios, it generates personalized questions and feedback using artificial intelligence, making your interview preparation smarter and more efficient.

---

## 🧠 Key Features

### 🔐 User Authentication
- Sign in and create an account via **Firebase Authentication**

### 🎯 Interview Setup
- Choose your tech job role (e.g., *Software Engineer*, *Data Scientist*)
- AI tailors interview questions to your chosen field

### 💬 AI-Generated Questions
- Powered by **Gemini API**, delivering dynamic and relevant interview questions
- Adjusts questions in real-time based on your responses

### 🧾 AI Feedback
- Get personalized feedback after each interview session
- Highlights strengths and areas for improvement

### 🎙️ Voice Integration
- Talk to your AI interviewer using voice, powered by **VAPI (Voice API)**
- Enhances realism and interactivity of the interview experience

---

## 🧰 Tech Stack

### 🖥️ Frontend
- **React.js** – Component-based UI
- **TypeScript** – Type safety and improved developer experience

### 🛠️ Backend
- **Node.js** – Server-side runtime
- **Express.js** – API routing and request handling

### 🔗 APIs
- **Gemini API** – Generates dynamic, AI-powered interview questions and feedback
- **VAPI (Voice API)** – Enables voice-based interaction

### 🗃️ Database & Auth
- **Firestore** – NoSQL database for storing user data and interviews
- **Firebase Authentication** – Handles user accounts and sign-ins securely

---

Help was provided by JS mastery with giving code snippets as well as the figma design

## ⚙️ Setup & Installation

### 📋 Prerequisites
- Node.js (v14.x or higher)
- Firebase account (Firestore & Authentication)
- VAPI account (for voice integration)
- Gemini API credentials

### 📦 Installation Steps

```bash
# Clone the repository
git clone https://github.com/your-username/ai-interviewer-app.git
cd ai-interviewer-app

# Install dependencies
npm install

# Set up environment variables
touch .env


### Prerequisites
- Node.js (>= 14.x.x)
- Firebase account (for Firestore and Authentication)
- VAPI account (for voice integration)
- Gemini API credentials (for AI question generation)
