import { useState, useContext } from "react";
import Input from "../../components/formControll/Input";
import { AppContext } from "../../state/Context";
import classes from "./Login.module.css";
import Button from "../../components/formControll/Button";

const Login = () => {
  const { loginUser } = useContext(AppContext);
  const [email, setEmail] = useState("hello@gmail.com");
  const [password, setPassword] = useState("123456");

  const loginHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser({ email, password });
    } else {
      alert("Fields cannot be empty");
    }
  };

  return (
    <div className={classes.loginContainer}>
      <form className={classes.loginForm} onSubmit={loginHandler}>
        <Input type="email" label="Email" value={email} setValue={setEmail} />
        <Input
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
        <Button text="Login" />
      </form>
    </div>
  );
};

export default Login;
