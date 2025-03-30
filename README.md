# AI Interviewer App (PrepPal)
LINK : ai-interviewer-is1vpmrxa-keaton-nordbys-projects.vercel.app

## Description

The AI Interviewer App is an innovative platform that allows users to prepare for tech job interviews. By using artificial intelligence, the app customizes interview questions based on the user's input and provides feedback based on the answers given. This application is designed to help users prepare for tech roles by simulating real interview scenarios.

### Key Features:
- **User Authentication**: Sign in and create an account.
- **Interview Preparation**: Users can specify the job role they want to specialize in.
- **AI-Generated Questions**: Based on the user's input, AI generates relevant interview questions.
- **Feedback Generation**: The app generates personalized feedback based on the answers provided by the user during the interview.
- **Voice Integration**: Users can interact with the AI interviewer using voice commands, powered by VAPI (Voice API).

## Tech Stack

- **Frontend**: 
  - **React.js**: Used for building the user interface.
  - **TypeScript**: For type safety and better development experience.

- **Backend**: 
  - **Node.js**: Server-side runtime environment for handling API requests and user interactions.
  - **Express**: Framework for creating the backend routes and handling HTTP requests.

- **Database**: 
  - **Firestore**: NoSQL database for storing user data and interview-related information.

- **APIs**:
  - **VAPI (Voice API)**: For enabling voice interaction with the AI interviewer.
  - **Gemini**: Used for making API calls and processing user inputs related to the interview.

## Features Overview

1. **User Authentication**:
   - Users can create an account and sign in to their profiles.
   - Authentication is handled through Firebase Authentication.

2. **Interview Setup**:
   - After logging in, users can specify the tech job role they want to be specialized in (e.g., Software Engineer, Data Scientist, etc.).
   - The AI analyzes this input to generate relevant questions tailored to that role.

3. **AI-Generated Questions**:
   - Using the Gemini API, the app generates a series of interview questions based on the user’s job role.
   - The AI provides dynamic questions, adjusting based on user input during the session.

4. **Take the Interview**:
   - Users can answer the generated questions one by one.
   - The interview questions are designed to simulate a real interview experience, allowing users to improve their responses.

5. **AI Feedback**:
   - After completing the interview, the app analyzes the user's answers and generates detailed feedback, focusing on areas for improvement.

6. **Voice Interaction**:
   - Users can opt to interact with the AI via voice, powered by VAPI, making the interview process more interactive and realistic.

## Setup and Installation

### Prerequisites
- Node.js (>= 14.x.x)
- Firebase account (for Firestore and Authentication)
- VAPI account (for voice integration)
- Gemini API credentials (for AI question generation)
