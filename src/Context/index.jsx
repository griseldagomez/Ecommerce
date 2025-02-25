import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext(); //esyado global

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: Object,
};
