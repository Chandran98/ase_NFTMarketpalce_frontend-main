import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {  
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={" w-full  relative px-12"}>
      <div className={" w-[50%]  h-14 flex px-12  justify-between  relative mx-16   border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  rounded-full items-center "}>
        <div className="flex  items-center gap-4">
        <BsSearch className={"  cursor-pointer "} />
        <input
          type="text"
          placeholder="Type you keyword..."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        </div>
        {/* <BsArrowRight className={" p-6  bg-gray-800 rounded-full "} /> */}
      </div>
    </div>
  );
};

export default SearchBar;
