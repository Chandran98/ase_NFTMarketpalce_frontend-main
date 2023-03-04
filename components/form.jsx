import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";


const Form = () => {
  return (
    <div className={" w-full"}>
      <div className={"flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-5 sm:space-y-6 md:sm:space-y-7"}>
        <form>
          <div className={" mt-8"}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="shoaib bhai"
              className={" w-full border-1 p-4 rounded-2xl mt-1 outline-none"}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <div className={" w-full  rounded-3xl items-center flex  overflow-hidden"}>
              <div className="text-lg bg-cyan-200 p-4 text-cyan-700 grid cursor-pointer">
                <HiOutlineMail />
              </div>
              <input  className="text-white p-4 w-full" type="text" placeholder="Email*" />
            </div>
          </div>

          <div className="mt-2 flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea className="p-4"
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="something about yourself in few words"
            ></textarea>
          </div>

          <div className="mt-2  ">
            <label  htmlFor="website">Website</label>
            <div className={"w-full rounded-2xl flex items-center  overflow-hidden"}>
              <div className={" text-lg bg-cyan-200 p-4 text-cyan-700 grid cursor-pointer"}>
                <MdOutlineHttp />
              </div>

              <input className="p-4  rounded-r-3xl" type="text" placeholder="website" />
            </div>
          </div>

          <div className={" flex gap-4"}>
            <div className="mt-2">
              <label htmlFor="facebook">Facebook</label>
              <div className="w-full rounded-2xl flex items-center   overflow-hidden">
                <div className="text-lg bg-cyan-200 p-4 text-cyan-700 grid cursor-pointer">
                  <TiSocialFacebook />
                </div>
                <input className="p-4  rounded-r-3xl" type="text" placeholder="http://shoaib" />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="Twitter">Twitter</label>
              <div className="w-full rounded-2xl flex items-center overflow-hidden">
                <div className="text-lg bg-cyan-200 p-4 text-cyan-700 grid cursor-pointer">
                  <TiSocialTwitter />
                </div>
                <input className="p-4  rounded-r-3xl"  type="text" placeholder="http://shoaib" />
              </div>
            </div>
            <div className="mt-2 gap-2">
              <label  htmlFor="Instagram">Instagram</label>
              <div className="w-full rounded-2xl flex items-center overflow-hidden">
                <div className="text-lg bg-cyan-200 p-4 text-black grid cursor-pointer">
                  <TiSocialInstagram />
                </div>
                <input className="p-4  rounded-r-3xl"  type="text" placeholder="http://shoaib" />
              </div>
            </div>
          </div>

          <div className="mt-2 gap-2">
            <label htmlFor="wallet">Wallet address</label>
            <div className="w-full rounded-2xl flex items-center overflow-hidden">
              <div className="text-lg bg-cyan-200 p-4 text-black grid cursor-pointer">
                <MdOutlineHttp />
              </div>
              <input className="w-[60%] p-4"
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
              />
              <div className="text-lg rounded-r-2xl bg-cyan-200 p-4 text-cyan-700 grid cursor-pointer">
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={"mt-8 p-4 bg-cyan-500 rounded-full text-white    px-72"}>
           <button 
              handleClick={() => {}}
              className={"nc-Button relative h-auto inline-flex  items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"}>
           Upload profile
           </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
