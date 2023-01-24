import React from "react";
import Link from "next/link";

const Discoverdata = ({ classPrps }) => {
  const discoveritems = [
    { title: "Collections", pages: "/collection" },
    { title: "Search", pages: "/search" },
    { title: "Author profile", pages: "/author" },
    { title: "NFT Details", pages: "/nft-details" },
    { title: "NFTUpload", pages: "/uploadnft" },
    { title: "Account Setting", pages: "/account" },
    { title: "Connect Wallet", pages: "/connectwallet" },
    { title: "Blog", pages: "/blog" },
  ];
  return (
    <ul>
      {discoveritems.map((items) => (
        <li className="py-1" key={items.length}>
          <Link href={items.pages} className={`${classPrps}`}>
            {items.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Helpcenterdata = ({ classProps }) => {
  const helpcenteritems = [
    { title: "About", pages: "/aboutus" },
    { title: "Contact Us", pages: "/contactus" },
    { title: "Sign Up", pages: "/register" },
    { title: "Sign In", pages: "/login" },
    { title: "Subscription", pages: "/subscription" },
  ];
  return (
    <ul>
      {helpcenteritems.map((items) => (
        <li className="py-1" key={items.length}>
          <Link href={items.pages} className={`${classProps}`}>
            {items.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Discoverdata, Helpcenterdata };
