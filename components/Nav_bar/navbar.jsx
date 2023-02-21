/* eslint-disable react/jsx-key */
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../img";
import { MdNotificationsActive } from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import { Discoverdata, Helpcenterdata } from "../Data/data";
import { Asecontext } from "../../context/Asecontext";
export default function Landingpagenavbar() {
  const [discoverdropdown, setdiscoverdropdown] = useState(false);
  const handlediscoverdropdown = () => {
    discoverdropdown
      ? setdiscoverdropdown(false)
      : [setdiscoverdropdown(true), sethelpcenterdropdown(false)];
  };

  const helpcenteritems = [
    { title: "About" },
    { title: "Contact Us" },
    { title: "Sign Up" },
    { title: "Sign In" },
    { title: "Subscription" },
  ];

  const [helpcenterdropdown, sethelpcenterdropdown] = useState(false);
  const handlehelpcenterdropdown = () => {
    helpcenterdropdown
      ? sethelpcenterdropdown(false)
      : [sethelpcenterdropdown(true), setdiscoverdropdown(false)];
  };
  const profileitems = [
    { title: "My Profile" },
    { title: "My Items" },
    { title: "Edit Profile" },
    { title: "Help" },
    { title: "Disconnect" },
  ];
  const [profiledropdown, setprofiledropdown] = useState(false);
  const handleprofiledropdown = () => {
    profiledropdown ? setprofiledropdown(false) : setprofiledropdown(true);
  };

  const { currentAccount, connectWallet } = useContext(Asecontext);

  return (
    <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8 p-32 ">
      <div className="flex  flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10"><Link href="/" className="ml-3 ">
        <Image
          src={image.logo2}
          className="img-fluid d-3 "
          alt="#"
          width={100}
          height={100}
        />
      </Link>

      <div className="search  ">
        <input
          id="quick_search"
          className="xs-hide p-1 rounded-3xl		"
          name="quick_search"
          placeholder="search  here..."
          type="text"
        />
      </div>
</div>
      <div className="  flex ">
        {/* Discover */}
        <div className="navbar-item px-5">
          <button
            className="dropdown-custom dropdown-toggle btn flex-col font-bold"
            onClick={handlediscoverdropdown}
          >
            Discover
          </button>
          {discoverdropdown && (
            <div className="item-dropdown cursor-pointer flex-col ">
              <div className=" absolute p-4  bg-white  w-[200px] rounded-lg z-10 ">
                <Discoverdata classPrps="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto text-base hover:text-white font-semibold" />
              </div>
            </div>
          )}
        </div>

        {/* Help Center */}

        <div className="navbar-item px-5">
          <button
            className="dropdown-custom dropdown-toggle btn flex-col font-bold"
            onClick={handlehelpcenterdropdown}
          >
            Help Center
          </button>
          {helpcenterdropdown && (
            <div className="item-dropdown cursor-pointer flex-col">
              <div className="dropdown flex-col absolute p-4 bg-white w-300px rounded-lg z-10 ">
                <Helpcenterdata classProps="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto text-base hover:text-white font-semibold" />
              </div>
            </div>
          )}
        </div>
      </div>
   <div className="flex items-center gap-3">
       {/* Notification */}
       <div className="relative  bg-cyan-600 text-white rounded-full  p-2   flex justify-center items-center      ">
        <MdNotificationsActive className=" text-2xl" />
      </div>
      <div className=" relative cursor-pointer">
        {currentAccount == "" ? (
          <button className="relative h-auto inline-flex items-center justify-center rounded-full  text-sm sm:text-base font-medium px-4 py-2  bg-cyan-600 hover:bg-cyan-700 text-neutral-50  " onClick={() => connectWallet()}> Connect</button>
        ) : (
          <Link href="/uploadnft"><button className=" relative h-auto inline-flex items-center justify-center rounded-full  text-sm sm:text-base font-medium px-4 py-2  bg-cyan-600 hover:bg-cyan-700 text-neutral-50   " onClick={() => {}}> Create</button></Link>
        )}
      </div>
      {/* Profile */}
      <div className="">
        <button
          onClick={handleprofiledropdown}
          className="  inline-flex items-center justify-center rounded-full  text-sm sm:text-base font-medium p-3  bg-cyan-600 hover:bg-cyan-700 text-neutral-50  "
        >
           <CgProfile className=" text-xl "/>
        </button>
        {profiledropdown && (
          <div className="item-dropdown cursor-pointer flex-col">
            <div className="dropdown flex-col absolute p-4 bg-white w-300px rounded-lg  ">
              <ul>
                {profileitems.map((items) => {
                  return (
                    <li className="py-1">
                      <Link href="/home1">{items.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
   </div>
    </div>
  );
}