const Login = ({ setToken }) => {
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ token: "hello world" });
    }, 1000);
  });
  const login = async () => {
    const { token } = await newPromise;
    setToken(token);
  };
  return (
    <p>
      <button onClick={login}>Login</button>
    </p>
  );
};

export default Login;
