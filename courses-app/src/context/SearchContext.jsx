import React, {useContext, createContext, useState}  from 'react'

const SearchContext = createContext({
    search : "",
    setSearch: () => {},
})

export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState(null);
    const [ userName, setUserName ] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch, userName, setUserName}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext)