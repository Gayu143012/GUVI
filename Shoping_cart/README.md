# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Technologies Used
React: For building the UI components and managing state.
CSS: For styling the application.
Vite: As the build tool for fast development.
src/
├── components/
│   ├── Navbar.jsx         // Navigation bar component
│   ├── Hero.jsx           // Hero banner component
│   ├── ProductList.jsx    // Displays the list of products
│   ├── ProductCard.jsx    // Individual product card
├── App.jsx                // Main application logic
├── styles.css             // Custom styles for the app
index.html                 // Root HTML file
Install Dependencies
Make sure you have Node.js installed. Then, run:

bash
npm install
Run the Development Server
Start the local server:
npm run dev
View the Application
Open your browser and go to:
http://localhost:5173/
How to Deploy on Netlify
Create a production build:
npm run build
Drag the dist folder generated after the build process into your Netlify dashboard.
Follow the prompts to deploy your site.
![image](https://github.com/user-attachments/assets/07624dc8-58f2-4cb8-8926-ff67e4597348)
![image](https://github.com/user-attachments/assets/d9a18a1f-2c41-40f4-b9fe-b64b62ce3f82)



