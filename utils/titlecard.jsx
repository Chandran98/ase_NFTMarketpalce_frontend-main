import React from "react";

export default function titlecard({ heading, paragraph }) {
  return (
    <div className="">
      <h2 className="flex items-center  flex-wrap  text-4xl md:text-4xl font-semibold">
        {heading}
      </h2>
      <p className="block mt-5 text-neutral-500 dark:text-neutral-400">
        {paragraph}
      </p>
    </div>
  );
}
