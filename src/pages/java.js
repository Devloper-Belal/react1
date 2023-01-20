import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontant from "../comp/maincontant";
import { Helmet } from "react-helmet-async";
const Java = () => {
  return (
    <>
    <Helmet>
        <title>Javasecript Page</title>
        <meta name="description" content="csssssssssssssssssssss" />
      </Helmet>
    <Header/>
    <Maincontant pag="javasecript"/>
      <Footer/>
    </>
  );
};
export default Java;