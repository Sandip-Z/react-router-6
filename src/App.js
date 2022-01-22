import { useRoutes } from "react-router-dom";
import "./App.css";
import About from "./Component/About";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Layout from "./Layout";
import useToken from "./hooks/useToken";
import AuthProvider from "./Component/AuthProvider";

const App = () => {
  const { token, setToken, removeToken } = useToken();
  let routes = [
    {
      path: "/",
      element: (
        <AuthProvider value={{ token, setToken, removeToken }}>
          <Layout />
        </AuthProvider>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
      ],
    },
  ];
  let element = useRoutes(routes);
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return <>{element}</>;
};

export default App;
