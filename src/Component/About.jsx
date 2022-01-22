import PrivateRoute from "./withPrivateRoute";

const About = () => {
  return <p>This is About</p>;
};

export default PrivateRoute(About);
