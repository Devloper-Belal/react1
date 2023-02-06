import Header from "../comp/header";
import Footer from "../comp/footer";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
const Signin = () => {
  return (
    <>
    <Helmet>
        <title>signin</title>
        <meta name="description" content="signin" />
      </Helmet>
    <Header/>
    <main>
    <form className="account">

    <input required placeholder="Email" type="email"  />
    <input required placeholder="password" type="password"  />
    <button>signin</button>

  <p>Dont have an account go to <Link to="/signup">sign-up</Link></p>
</form> 
    </main>
      <Footer/>
    </>
  );
};
export default Signin;