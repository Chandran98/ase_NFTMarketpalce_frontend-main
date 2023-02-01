import "../styles/globals.css";

import { Aseprovider } from "../context/Asecontext";
const MyApp = ({ Component, pageProps }) => (
  <>
    <Aseprovider>
   
      <Component {...pageProps} />{" "}
    </Aseprovider>
  </>
);

export default MyApp;
