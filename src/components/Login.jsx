import { useState } from "react";
import { Header } from "./Header";
import '../App.css'

export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const clickHandler = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <div>
        <Header /> 
      </div>

      <form>
        <h1>{isSignIn ? "Sign In" : "Sign up"}</h1>
        {isSignIn && <input type="textbox" placeholder="Full Name" />}
        <input type="textbox" placeholder="Email" />
        <input type="textbox" placeholder="Password" />
        <button>Sign</button>
        <p onClick={clickHandler}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already rigistered, Sign In Now"}
        </p>
      </form>
    </>
  );
};
