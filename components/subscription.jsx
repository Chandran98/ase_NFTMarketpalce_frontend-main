import React from "react";
import Images from "next/image";
import Image from "../img";
import Title from "../utils/titlecard"

export default function Subscription() {
  return (
  <>
             <div
      class="nc-SectionSubscribe2 p-32 relative flex flex-col lg:flex-row lg:items-center"
      data-nc-id="SectionSubscribe2"
    >
  
      <div class="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Title heading={"Never miss a drop!"} paragraph={" Subscribe to our super-exclusive drop list and be the first to know about upcoming drops"}/>
      
        <ul class="space-y-4 mt-10">
          <li class="flex items-center space-x-4">
            <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-blue-800 bg-blue-100  relative">
              01
            </span>
            <span class="font-medium text-neutral-700 dark:text-neutral-300">
              Get more discount
            </span>
          </li>
          <li class="flex items-center space-x-4">
            <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-red-800 bg-red-100  relative">
              02
            </span>
            <span class="font-medium text-neutral-700 dark:text-neutral-300">
              Get premium magazines
            </span>
          </li>
        </ul>
        <form class="mt-10 relative max-w-sm">
          <input
            type="email"
            class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 "
            required=""
            aria-required="true"
            placeholder="Enter your email"
          />
          <button
            class="nc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-black  absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div class="flex-grow">
        <div class="nc-NcImage " data-nc-id="NcImage">
          <Images
            src={Image.update}
            class="object-cover w-full h-full"
            alt="/" 
          />
        </div>
      </div>
    </div>
  </>
  );
}


