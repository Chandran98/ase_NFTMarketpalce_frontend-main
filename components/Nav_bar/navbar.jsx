/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../img"
import { MdNotificationsActive } from "react-icons/md";
import  {Discoverdata, Helpcenterdata } from "../Data/data"

export default function Landingpagenavbar() {


  const [discoverdropdown, setdiscoverdropdown] = useState(false);
  const handlediscoverdropdown = () => {
    discoverdropdown ? setdiscoverdropdown(false) : [setdiscoverdropdown(true),sethelpcenterdropdown(false)];
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
    { title: "My Profile",  },
    { title: "My Items" },
    { title: "Edit Profile" },
    { title: "Help" },
    { title: "Disconnect" },
  ];
  const [profiledropdown, setprofiledropdown] = useState(false);
  const handleprofiledropdown = () => {
    profiledropdown ? setprofiledropdown(false) : setprofiledropdown(true);
  };

  return (
    <div className=" row w-full group items-center h-20 p-2 bg-slate-200 justify-between align-middle lg:flex md:flex hidden   ">
      <Link href="/" className="ml-3 ">
        <Image
          src={ image.logo2}
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

      <div className="menu  flex ">
        {/* Discover */}
        <div className="navbar-item px-5">
          <button
            className="dropdown-custom dropdown-toggle btn flex-col"
            onClick={handlediscoverdropdown}
          >
            Discover
          </button>
          {discoverdropdown && (
            <div className="item-dropdown cursor-pointer flex-col ">
              <div className=" absolute p-4  bg-white  w-[200px] rounded-lg z-10 ">
                <Discoverdata classPrps="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto text-base hover:text-white font-semibold"/>
              </div>
            </div>
          )}
        </div>

        {/* Help Center */}

        <div className="navbar-item px-5">
          <button
            className="dropdown-custom dropdown-toggle btn flex-col"
            onClick={handlehelpcenterdropdown}
          >
            Help Center
          </button>
          {helpcenterdropdown && (
            <div className="item-dropdown cursor-pointer flex-col">
              <div className="dropdown flex-col absolute p-4 bg-white w-300px rounded-lg z-10 ">
               <Helpcenterdata  classProps="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto text-base hover:text-white font-semibold"/>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Notification */}
      <div className="relative  bg-black text-white rounded-full  p-2   flex justify-center items-center      ">
        <MdNotificationsActive className=" text-2xl" />
      </div>

      {/* Profile */}
      <div>
        <button
          onClick={handleprofiledropdown}
          className=" bg-black  mr-3 rounded-lg text-white px-6 py-2  "
        >
          Profile
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
  );
}
