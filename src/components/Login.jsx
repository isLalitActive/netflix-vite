import '../App.css'
import { useRef, useState } from "react";
import { Header } from "./Header";
import { validateData } from '../utils/validate';


export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const clickHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const signInHandler = () => {
    console.log(emailRef);
    console.log(passwordRef);
    const error = validateData(emailRef.current.value, passwordRef.current.value);
    console.log(error);
    setErrorMessage(error);
  }

  return (
    <>
      <div>
        <Header /> 
      </div>

      <form onSubmit={(event) => event.preventDefault()}>
        <h1>{isSignIn ? "Sign In" : "Sign up"}</h1>
        {!isSignIn && <input type="text" placeholder="Full Name" />}
        <input ref={emailRef} type="text" placeholder="Email" />
        <p>{errorMessage[0]}</p>
        <input ref={passwordRef} type="password" placeholder="Password" />
        <p style={{ color: "red"}}>{errorMessage[1]}</p>
        <button onClick={signInHandler}>Sign In</button>
        <p onClick={clickHandler}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already rigistered, Sign In Now"}
        </p>
      </form>
    </>
  );
};
