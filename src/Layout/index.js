import {Link, Outlet} from 'react-router-dom'
import {useEffect} from 'react';

const Layout = (props) => {
    useEffect(() => {
        console.log("I was mounted");
    }, [])
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
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </aside>
      <main>{props.children}</main>
      <Outlet />
    </div>
  );
};

export default Layout;
