import React from "react";

export default function bt({ btnName, handleClick, icon, className }) {
  return (
    <div className={""}>
      <button
        className={``}
        onClick={() => handleClick()}
      >
        {icon} {btnName}
      </button>
    </div>
  );
}
