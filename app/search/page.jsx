import React from 'react'
import Searchinputs from './Searchinputs'
import searchResults from "./searchResults";

export default function search() {
  return (
    <div className='m-10'>
        <h1 className='text-center'>
            CARI DATA
            <Searchinputs searchResults={searchResults}/>
        </h1>
    </div>
  )
}
