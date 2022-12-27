import React, {useState}from "react";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";

import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import{FiHome}  from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

export default function Sidebar() {

  const [opensidebar, setOpensidebar]= useState(true);
  console.log(opensidebar);
  return (
    <div className="">
      <div  className="absolute top-  4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
       {opensidebar?
        <FiHome onClick={()=>setOpensidebar(false) }
        className="block md:hidden h-6 w-6"
        // aria-hidden="true"
      />:<GiHamburgerMenu onClick={()=> setOpensidebar(true) }
      className="block md:hidden h-6 w-6"
      // aria-hidden="true"
    />
        
       }
      </div>

     {
      opensidebar ? <div  className="p-6  h-screen bg-white z-20 fixed top-0 -left-96 md:hidden  lg:w-60 left-0  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
      <div className="flex flex-col justify-start item-center ">
        <>
          <h1 className="text-base text-start cursor-pointer font-[700] text-blue-900 ">
            Richie J
          </h1>
          <h3 className=" text-base text-start cursor-pointer font-[500] text-blue-900 border-b-2 border-gray-100 pb-4 w-full ">
        
            richie98@gmail.com
          </h3>
        </>
        <div className=" my-4 border-b border-gray-100 pb-4">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Dashboard
            </h3>
          </div>

          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Auction
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Listing
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Bid
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              My Collection
            </h3>
          </div>
          <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Profile
            </h3>
          </div>
        </div>
        {/* setting  */}
        <div className=" my-4 border-b border-gray-100 pb-4">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Settings
            </h3>
          </div>
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              More
            </h3>
          </div>
        </div>
        {/* logout */}
        <div className=" my-4">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Logout
            </h3>
          </div>
        </div>
      </div>
    </div>: <div></div>
     }
    </div>
  );
}
