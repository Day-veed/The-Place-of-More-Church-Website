import { createContext, useContext, useState } from "react";


export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {

    const [draweropen, setDraweropen] = useState(false);

    const value = {
        draweropen,
        setDraweropen
    }

    return <UIContext.Provider value={value} >{children}</UIContext.Provider>
}