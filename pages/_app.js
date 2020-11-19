import "../assets/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Menu from "../components/menu";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Menu/>
      <Component {...pageProps} />{" "}  
    </>
  );
}

export default MyApp;
