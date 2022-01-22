import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Component/AuthProvider";

const Layout = () => {
  const { removeToken } = useContext(AuthContext).value;
  return (
    <div className="layout--wrapper">
      <aside>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button onClick={removeToken}>logout</button>
          </li>
        </ul>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
