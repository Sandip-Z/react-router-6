import PrivateRoute from "./withPrivateRoute";

const Home = () => {
  return <p>This is home</p>;
};

export default PrivateRoute(Home)