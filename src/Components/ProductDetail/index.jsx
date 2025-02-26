/* eslint-disable react/react-in-jsx-scope */
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./style.css";

const productDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                    <XMarkIcon
                        className="size-6 text-blue-black cursor-pointer"
                        onClick={() => context.closeProductDetail()}
                    ></XMarkIcon>
                </div>
            </div>
            <figure className="px-6">
                <img
                    className="w-full h-full rounded-lg"
                    src={context.productToShow.image}
                    alt={context.productToShow.title}
                />
            </figure>
            <p className="flex flex-col px-6 m-4">
                <span className=" font-medium text-2xl">
                    {context.productToShow.price}
                </span>
                <span className=" font-medium text-md">
                    {context.productToShow.title}
                </span>
                <span className=" font-light text-sm">
                    {context.productToShow.description}
                </span>
            </p>
        </aside>
    );
};

export default productDetail;
