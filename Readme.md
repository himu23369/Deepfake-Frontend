# Deepfake Detection Project Frontend

This repository contains the frontend for the Deepfake Detection project. The project is focused on identifying and classifying media as genuine or manipulated. The frontend serves as the user interface for interacting with the model and visualizing the results.

![Home Page](frontend.png)

## Features
- **User-friendly Interface**: A simple and intuitive UI for uploading media files.
- **Authentication System**: Includes signup and signin functionality to manage user accounts securely.
- **Landing Page**: A welcoming page with an overview of the project, options to login or signup, and details about the team members.
- **Real-time Feedback**: Displays predictions (genuine or manipulated) with confidence scores.
- **Interactive Visualizations**: Provides insights into detection results through graphs and highlights.
- **Responsive Design**: Works seamlessly across different devices.

## Tech Stack
- **Framework**: React.js
- **Styling**: Tailwind 

## Prerequisites
Ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn package manager

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/himu23369/Deepfake-Frontend.git
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```
   This will start the development server. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## API Integration
The frontend interacts with the model at the backend to send media files and receive detection results. Ensure the backend is running and accessible. Update the API base URL in the environment configuration if necessary.

## Contributions
We welcome contributions from the community to make this project better. For any contributions or inquiries, feel free to reach out to Himanshu at himu90505@gmail.com.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
