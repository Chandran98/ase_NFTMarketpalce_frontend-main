import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdNotificationsActive } from "react-icons/md";

export default function Landingpagenavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  return (
    <span>
      <div className=" row w-screen group items-center h-20 p-2 bg-slate-200 justify-between align-middle lg:flex md:flex hidden   ">
        <Link href="/" className="ml-3 ">
          <Image
            src="/../public/favicon.ico"
            className="img-fluid d-3 "
            alt="#"
            width={35}
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

        <div className="menu  flex  ">
          <div className="navbar-item px-5">
            <div
              className="dropdown-custom dropdown-toggle btn"
              // onClick={handleBtnClick}
            >
              Home
            </div>
            {openMenu && (
              <div className="item-dropdown">
                <div className="dropdown" onClick={closeMenu}>
                  {/* <Link to=" " onClick={()=> window.open("http://gigaland.retro.on3-step.com", "_self")}>New Retro Scheme</Link>
                               <Link to=" " onClick={()=> window.open("http://gigaland.grey.on3-step.com", "_self")}>New Grey Scheme</Link> */}
                  <Link href="/" onClick={() => btn_icon(!showmenu)}>
                    Homepage
                  </Link>
                  <Link href="/home1" onClick={() => btn_icon(!showmenu)}>
                    Homepage 1
                  </Link>
                  <Link href="/home2" onClick={() => btn_icon(!showmenu)}>
                    Homepage 2
                  </Link>
                  <Link href="/home3" onClick={() => btn_icon(!showmenu)}>
                    Homepage 3
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="navbar-item">
            <div
              className="dropdown-custom dropdown-toggle btn px-5"
              // onClick={handleBtnClick1}
            >
              Explore
            </div>
            {openMenu1 && (
              <div className="item-dropdown">
                <div className="dropdown" onClick={closeMenu1}>
                  {/* <Link to="/explore" onClick={() => btn_icon(!showmenu)}>Explore</Link>
                               <Link to="/explore2" onClick={() => btn_icon(!showmenu)}>Explore 2</Link>
                               <Link to="/ranking" onClick={() => btn_icon(!showmenu)}>Rangking</Link>
                               <Link to="/collection" onClick={() => btn_icon(!showmenu)}>Collection</Link>
                               <Link to="/ItemDetail" onClick={() => btn_icon(!showmenu)}>Items Details</Link>
                               <Link to="/Auction" onClick={() => btn_icon(!showmenu)}>Live Auction</Link>
                               <Link to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</Link> */}
                </div>
              </div>
            )}
          </div>
          <div className="navbar-item">
            <div
              className="dropdown-custom dropdown-toggle btn px-5"
              // onClick={handleBtnClick2}
            >
              Pages
            </div>
            {openMenu2 && (
              <div className="item-dropdown">
                <div className="dropdown" onClick={closeMenu2}>
                  {/* <Link to="/Author" onClick={() => btn_icon(!showmenu)}>Author</Link>
                               <Link to="/wallet" onClick={() => btn_icon(!showmenu)}>Wallet</Link>
                               <Link to="/create" onClick={() => btn_icon(!showmenu)}>Create</Link>
                               <Link to="/create2" onClick={() => btn_icon(!showmenu)}>Create 2</Link>
                               <Link to="/createOptions" onClick={() => btn_icon(!showmenu)}>Create options</Link>
                               <Link to="/news" onClick={() => btn_icon(!showmenu)}>News</Link>
                               <Link to="/works" onClick={() => btn_icon(!showmenu)}>Gallery</Link>
                               <Link to="/login" onClick={() => btn_icon(!showmenu)}>login</Link>
                               <Link to="/loginTwo" onClick={() => btn_icon(!showmenu)}>login 2</Link>
                               <Link to="/register" onClick={() => btn_icon(!showmenu)}>Register</Link>
                               <Link to="/contact" onClick={() => btn_icon(!showmenu)}>Contact Us</Link> */}
                </div>
              </div>
            )}
          </div>
          <div className="navbar-item px-5">
            <Link href="/activity" onClick={() => btn_icon(!showmenu)}>
              Activity
            </Link>
          </div>
         
        </div>

        <div className="relative  bg-black text-white rounded-full  p-2   flex justify-center items-center      ">
          <MdNotificationsActive className=" text-2xl" />
        </div>
        <button
          className=" bg-black  mr-3 rounded-lg text-white px-6 py-2  "
          onClick={() => btn_icon(!showmenu)}
        >
          Login
        </button>
      </div>
    </span>
  );
}
