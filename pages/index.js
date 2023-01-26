import Head from "next/head";
import React from "react";
import Sidebar from "../components/Nav_bar/sidebar/sidebar";
import Homepage from "../pages/home";

import {Aseprovider} from "../context/Asecontext";

export default function Home() {
  return (
    <>
      
      <Head>
        <title> Obito</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <main>
     <div > <Aseprovider>
        <Homepage />
        <Sidebar />
        </Aseprovider></div>
      </main>
     
    </>
  );
}

