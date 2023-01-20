import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontant from "../comp/maincontant";
import { Helmet } from "react-helmet-async";
const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>

    <Header/>
    <Maincontant pag="css" />
    <Footer/>
    </>
  );
};
export default Css;