import { useRoutes } from "react-router-dom";
import "./App.css";
import About from "./Component/About";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Layout from "./Layout";

function App() {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];
  let element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
