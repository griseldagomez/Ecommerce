import React, { createContext, useState } from "react";

const ShoppingCartContex = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <ShoppingCartContex.Provider
            value={{
                count,
                setCount,
            }}
        >
            {children}
        </ShoppingCartContex.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: Object,
};
