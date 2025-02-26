import React, { createContext, useState } from "react";

export const ShoppingCartContext = createContext(); //esyado global

export const ShoppingCartProvider = ({ children }) => {
    //ShoppingCart . Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Product Detail . Show product
    const [productToShow, setProductToShow] = useState({});

    //Shopping cart . Add product to cart
    const [cartProducts, setCardProducts] = useState([]);

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCardProducts,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: Object,
    closeProductDetail: Boolean,
};
