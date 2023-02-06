import { createBrowserRouter, RouterProvider } from "react-router-dom";
//ااستدعاء
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Java from "./pages/java";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/css",
    element: <Css />,
  },

  {
    path: "/java",
    element: <Java />,
  },
]);
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
