/* eslint-disable @next/next/no-img-element */
import React from "react";

// export default function service() {
//   return (
//     <div className="relative bg-white   ">
//      <div className="justify-between  flex gap-12 px-8">
//      <img
//         className="  "
//         src="
//         data:image/png;base64,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"
//         alt=""
//       />
//        <img
//         className=" "
//         src="
//         data:image/png;base64,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"
//         alt=""
//       />
//       <img
//         className=" "
//         src="
//         data:image/png;base64,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"
//         alt=""
//       />
//        <img
//         className=" "
//         src="
//         data:image/png;base64,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"
//         alt=""
//       />
//      </div>
//       <div className=" ">
//         <img
//           src="https://chisnghiax.com/ciscryp/static/media/VectorHIW.1a377ddaa77cc48b5b38a6739a397aff.svg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }

export default function service() {
  return (
    <div className=" bg-white  h-[40%]  relative lg:flex sm:flex-wrap  lg:justify-between sm:justify-center py-20 px-36">
      <div className=" w-[15%] h-48 flex flex-col items-center text-center   ">
        <img
          className="  "
          src="
          data:image/png;base64,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"
          alt=""
        />
        <p className=" text-lg font-bold  mb-2">Earn money</p>
        <p className="text-sm  leading-5 ">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className="p-2 w-[15%] h-48 flex flex-col items-center text-center   ">
        <img
          className=" "
          src="
         data:image/png;base64,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"
          alt=""
        />
        <p className=" text-lg font-bold  mb-2">Earn money</p>
        <p className="text-sm  leading-5">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className="p-2 w-[15%] h-48 flex flex-col items-center text-center   ">
        <img
          className="  "
          src="
          data:image/png;base64,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"
          alt=""
        />
        <p className=" text-lg font-bold  mb-2 ">Earn money</p>
        <p className="text-sm  leading-5">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
      <div className="p-2 w-[15%] h-48 flex flex-col items-center text-center   ">
        <img
          className="  justify-center"
          src="
         data:image/png;base64,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"
          alt=""
        />
        <p className=" text-lg font-bold  mb-2">Earn money</p>
        <p className=" text-sm  leading-5 ">
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
        </p>
      </div>
    </div>
  );
}
