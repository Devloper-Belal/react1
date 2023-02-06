import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontant from "../comp/maincontant";
import { Helmet } from "react-helmet-async";



const Home = () => {
  
  return (
    <>
    <Helmet>
        <title>Home Page</title>
        <meta name="description" content="home page" />
      
      </Helmet>

  <div >
    <Header/>
    <Maincontant pag="home"  designer="develoepr-belal"/>
        <Footer/>
  </div>
    </>
  );
};

export default Home;
