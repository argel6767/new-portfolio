'use client'
import React, {createContext, useContext, useMemo, useState, ReactNode} from "react";

interface GlobalContextType {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


interface GlobalProviderProps {
    children?:ReactNode,
}

/**
 * Houses global state variables
 * @param param
 * @returns
 */
export const GlobalProvider = ({children}:GlobalProviderProps) => {
    const [page, setPage] = useState("home");

    const contextValue = useMemo(() => ({
        page, setPage,
    }), [page]);

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);

    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};