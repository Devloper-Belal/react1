import Header from "../comp/header";
import Footer from "../comp/footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Signup = () => {
  return (
    <>
    <Helmet>
        <title>signup</title>
        <meta name="description" content="signup" />
      </Helmet>
    <Header/>
    <main>
    <form className="account">
<p>create an new account <span>🧡</span></p>
    <input required placeholder="Email"   type="email"  />
    <input required placeholder="password"   type="password"  />
    <button>signup</button>

  <p className="psup">already have an account, go to <Link to="/signin">sign-in</Link></p>
</form> 
    </main>
      <Footer/>
    </>
  );
};
export default Signup;