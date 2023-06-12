import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/HomePage/HomePage.jsx";
import Login from "./routes/Login/login.jsx";
import Register from "./routes/Register/Register.jsx";

//// Import CSS
// Import Tailwind CSS
import "/src/css/index.css";
// Import Ant Reset CSS
import 'antd/dist/reset.css';
// Import Custom Base Style to customize anything
import '/src/css/custom-base-style.css';

// Create a router
const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  }
]);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);