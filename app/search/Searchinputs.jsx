'use client'

import { useState } from "react"
import searchResult from "./searchResults";



export default function Searchinputs() {

    const[searchTerm, setSearchTerm] = useState("");
    const[resArr, setResArr] = useState([]);

    async function getResult(searchTerm){
        const res = await searchResult(searchTerm);
        setResArr(res)
        console.log(resArr);

    }


  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          className="shadow-xl shadow-slate-400 w-[75%] h-10 p-4 outline-2"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button className="p-2 text-white bg-orange-500 hover:cursor-pointer" onClick={getResult}>
          Search
        </button>
      </div>
    </div>
  );
}
