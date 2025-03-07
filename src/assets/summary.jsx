export const summary = [
  {
    title: "0. Technologies Used",
    content: [
      "The application uses the following technologies:",
      "Node.js: JavaScript runtime environment for the server side.",
      "Express: Minimalist web framework for building APIs.",
      "MongoDB: NoSQL database for storing user data.",
      "Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.",
      "bcryptjs: Library for hashing and verifying passwords.",
      "jsonwebtoken (JWT): Library for creating and verifying authentication tokens.",
      "dotenv: Loads environment variables from a .env file.",
      "cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).",
    ],
  },
  {
    title: "1. Routing (Routers.js)",
    content: [
      "The application uses createBrowserRouter from react-router-dom to define routes:",
      "/ → Home (renders the Home component)",
      '"" (default) → MainPage (main content)',
      "/login → Login Page",
      "/profile → Profile Page (protected by token validation)",
      "/linkone → Another Protected Page (LinkOne, also requires authentication)",
      "Protected routes (/profile and /linkone) are wrapped inside CheckToken, ensuring that only authenticated users can access them.",
    ],
  },
  {
    title: "2. Token Validation (CheckToken.js)",
    content: [
      "Uses Redux to retrieve the stored user token.",
      "If the token is missing or invalid, redirects the user to the Login Page.",
      'Calls axios.get("/users/verify-token") to verify if the token is valid.',
      "If verification is pending, shows a 'Verifying token...' message.",
      "If verification fails, redirects to the Login Page.",
      "If verification succeeds, renders the requested protected page.",
    ],
  },
  {
    title: "3. Home Component (Home.js)",
    content: [
      "Displays the Navigation menu at the top.",
      "Uses <Outlet /> to render child routes dynamically.",
      "Shows a footer message at the bottom.",
    ],
  },
  {
    title: "4. Login Form (FormLogin.js)",
    content: [
      "Uses Redux dispatch to store user data (setUser).",
      'Calls axios.post("/auth/login") to authenticate the user.',
      "If successful:",
      "- Stores the token, username, and email in Redux.",
      "- Redirects to the Profile Page (/profile).",
      "If authentication fails, displays an error message.",
    ],
  },
  {
    title: "5. Registration Form (FormRegister.js)",
    content: [
      'Calls axios.post("/auth/register") to create a new user.',
      "Displays an error message if registration fails.",
      "Does not automatically log in the user after registration.",
    ],
  },
  {
    title: "6. Redux User State (userSlice.js)",
    content: [
      "Stores user authentication data (token, username, email).",
      "setUser: Saves user data after login.",
      "logout: Clears user data when logging out.",
    ],
  },
];
