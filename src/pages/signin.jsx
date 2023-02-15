import Header from "../comp/header";
import Footer from "../comp/footer";
import { Link } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase/config";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <Helmet>
        <title>signin</title>
        <meta name="description" content="signin" />
      </Helmet>
      <Header />
      <main>
        <form className="account">
          <input
            onChange={(eo) =>{ setemail(eo.target.value)}}
            required
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(eo) => {setpassword(eo.target.value)}}
            required
            placeholder="password"
            type="password"
          />
          <button
            onClick={(eo) =>{
              eo.preventDefault()
              
              signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log( user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log( errorMessage)
  })
            }}
          >
            signin
          </button>

          <p>
            Dont have an account go to <Link to="/signup">sign-up</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default Signin;
