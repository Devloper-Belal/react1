import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontant from "../comp/maincontant";
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <>
    <Helmet>
        <title>Html Page</title>
        <meta name="description" content="html" />
      </Helmet>
    <Header/>
      <Maincontant pag="html" designer="developer-hossam"/>
      <Footer/>
    </>
  );
};
export default Html;