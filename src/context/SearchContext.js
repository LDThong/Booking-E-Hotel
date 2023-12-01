import React, { createContext, useEffect, useState } from "react";

const SearchContext = createContext();

const SearchProvider = SearchContext.Provider;

function MySearchContext({children}) {
    const [searchData, setSearchData] = useState(null);
  return (
    <SearchProvider value={{searchData,setSearchData}}>
        {children}
    </SearchProvider>
  )
}

export {SearchContext, MySearchContext}