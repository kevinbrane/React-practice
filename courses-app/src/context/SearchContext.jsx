import React, {useContext, createContext, useState}  from 'react'

const SearchContext = createContext({
    search : "",
    setSearch: () => {},
    isSearch: false,
    setIsSearch: () => {}
})



export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState(null);
    const [isSearch, setIsSearch] = useState(false)

    return (
        <SearchContext.Provider value={{search, setSearch, setIsSearch, isSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext)