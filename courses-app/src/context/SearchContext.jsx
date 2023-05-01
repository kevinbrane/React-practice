import React, {useContext, createContext, useState}  from 'react'

const SearchContext = createContext({
    search : "",
    setSearch: () => {},
})



export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState(null);

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext)