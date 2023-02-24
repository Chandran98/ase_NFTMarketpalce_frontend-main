/* eslint-disable react/jsx-key */
import React from "react";
import { TiTick } from "react-icons/ti";


const Subscription = ({ el, i }) => {
  return (
    <div className={" h-full relative p-5 rounded-3xl border-2 flex flex-col overflow-hidden border-neutral-100 dark:border-neutral-700"}>
      <div className={"mb-8"}>
        <span className={" block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium "}>{el.plan}</span>
        <small className={"bg-cyan-700 text-white px-3 py-1 tracking-widest text-xs absolute right-3 top-3 rounded-full z-10"}>
          {el.popular || ""}
        </small>
        <p className={" text-5xl leading-none flex items-center"}>{el.price}</p>

        <div className={' p-5'}>
          {el.service.map((el, i) => (
           <div className="flex items-center"> <p className={" flex items-center gap-3 text-neutral-700 dark:text-neutral-300 p-1 "} key={i + 1}>
           <span>
             <TiTick />
           </span>
           {el}
         </p></div>
          ))}
        </div>
        <button className=" nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium p-2   sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-cyan-700 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"> Submit</button>
       
      </div>
    </div>
  );
};

export default Subscription;
