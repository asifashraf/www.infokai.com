// import './templates/style.css';
// import './templates/css/font-icons.css';
// import './templates/css/components/ion.rangeslider.css';
// import './templates/demos/hosting/hosting.css';
// import './templates/css/custom.css';
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