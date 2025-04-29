import '../App.css'
import { useRef, useState } from "react";
import { Header } from "./Header";
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';


export const Login = () => {
  const [isSignInForm, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState([]);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signInSignUpToggle = () => {
    setIsSignIn(!isSignInForm);
  };

  const signInSignUpHandler = () => {
    const error = validateData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(error);

    if(errorMessage?.length > 0) return;

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });    
    }
    else {
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }
  }

  return (
    <>
      <div>
        <Header /> 
      </div>

      <form onSubmit={(event) => event.preventDefault()}>
        <h1>{isSignInForm ? "Sign In" : "Sign up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" />}
        <input ref={emailRef} type="text" placeholder="Email" />
        <p style={{ color: "red"}}>{errorMessage?.[0]}</p>
        <input ref={passwordRef} type="password" placeholder="Password" />
        <p style={{ color: "red"}}>{errorMessage?.[1]}</p>
        <button onClick={signInSignUpHandler}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={signInSignUpToggle}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already rigistered, Sign In Now"}
        </p>
      </form>
    </>
  );
};
