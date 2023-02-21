import "../styles/globals.css";

import { NFTMarketplaceProvider } from "../context/Asecontext";
const MyApp = ({ Component, pageProps }) => (
  <>
    <NFTMarketplaceProvider>
   
      <Component {...pageProps} />
    </NFTMarketplaceProvider>
  </>
);

export default MyApp;
