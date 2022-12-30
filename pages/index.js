import Head from "next/head";
import React from "react";
import Sidebar from "../components/Nav_bar/sidebar/sidebar";
import Homepage from "../pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title> Obito</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <main>
        <Homepage />
        <Sidebar />
      </main>
    </>
  );
}
