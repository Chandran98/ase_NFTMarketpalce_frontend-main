import React from 'react'

export default function Button({buttontext ,btcolor}) {
  return (
    <button className={`${btcolor} rounded-full p-2 text-white mt-6 w-40  lg:shadow shadow-gray-300`}>
     
     {buttontext}
  </button>
  )
}

