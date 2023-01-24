import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

// //INTERNAL IMPORT
// import Style from "../styles/contactus.module.css";
// import formStyle from "../AccountPage/Form/Form.module.css";
// import { Button } from "../components/componentsindex";

const contactus = () => {
  return (
    <div className={"w-full"}>
      <div className={"mb-24 lg:mb-32  m-24 px-48"}>
        <h1 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">Contact</h1>
        <div className={" flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12  container max-w-7xl mx-auto"}>
          <div className={" max-w-sm space-y-8"}>
            <div className="leading-4 w-[80%] text-lg">
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">🗺 ADDRESS</h3>
              <p className="block mt-2 text-neutral-500 dark:text-neutral-400">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="leading-4 w-[80%] text-lg">
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">💌 EMAIL</h3>
              <p className="block mt-2 text-neutral-500 dark:text-neutral-400">nc.example@example.com</p>
            </div>
            <div className="leading-4 w-[80%] text-lg">
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">☎ PHONE</h3>
              <p className="block mt-2 text-neutral-500 dark:text-neutral-400">000-123-456-7890</p>
            </div>
            <div className={" leading-4 w-[80%] text-lg flex"}>
              <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">🌏 SOCIALS</h3>
              <a className="block w-6 h-6" href="#">
                <TiSocialFacebook />
              </a>
              <a className="block w-6 h-6" href="#">
                <TiSocialLinkedin />
              </a>
              <a className="block w-6 h-6" href="#">
                <TiSocialInstagram />
              </a>
              <a className="block w-6 h-6" href="#">
                <TiSocialYoutube />
              </a>
              <a className="block w-6 h-6" href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={" p-5 container"}>
            <form className="grid grid-cols-1 gap-6">
              <div className={""}>
                <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 " htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="shoaib bhai"
                  className={" block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"}
                />
              </div>
              <div className={""}>
                <label className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200" htmlFor="email">Email</label>
                <div className={""}>
                  <div className={""}>
                    <HiOutlineMail />
                  </div>
                  <input       className={" block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"} type="text" placeholder="Email*" />
                </div>
              </div>
              <div className={""}>
                <label htmlFor="description">Message</label>
                <textarea       className={"block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"}
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="something about yourself in few words"
                ></textarea>
              </div>
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  nc-ButtonPrimary disabled:bg-opacity-70 bg-cyan-700 hover:bg-primary-700 text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"> send Message</button>
              {/* <Button
                btnName="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;

