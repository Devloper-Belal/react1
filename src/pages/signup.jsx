import Header from "../comp/header";
import Footer from "../comp/footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { auth } from "../firbase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <Helmet>
        <title>signup</title>
        <meta name="description" content="signup" />
      </Helmet>
      <Header />
      <main>
        <form className="account">
          <p>
            create an new account <span>🧡</span>
          </p>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
              console.log(eo.target.value);
            }}
            required
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            required
            placeholder="password"
            type="password"
          />
          <button
            onClick={(eo) =>{
              eo.preventDefault();
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                })
            }}
          >
            signup
          </button>

          <p className="psup">
            already have an account, go to <Link to="/signin">sign-in</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default Signup;
