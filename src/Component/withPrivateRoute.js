import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider";

const PrivateRoute = (Component, ...props) => {
  const PrivateComponent = ({ children }) => {
    const authContext = useContext(AuthContext);
    const hasToken = localStorage.getItem("token");
    if (hasToken) {
      return <> {children} </>;
    } else {
      authContext?.value.removeToken();
    }
    return <></>;
  };

  return () => {
    return (
      <PrivateComponent>
        <Component {...props} />
      </PrivateComponent>
    );
  };
};

export default PrivateRoute;
