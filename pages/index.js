import Head from "next/head";
import React from "react";
import LandingNavbar from "../components/landingPage_components/landingpage_navbar";
import Sidebar from "../components/Nav_bar/sidebar/sidebar";

export default function Home() {
  return <>
  <Head>
  <title> Obito</title>
        <link rel="icon" href="/fav.png" />
  </Head>
  <main>
  <LandingNavbar/>
    <Sidebar/>
  </main>
  
  </>;
}
 
