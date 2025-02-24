import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrders";
import MyOrders from "../MyOrders";
import NotFund from "../NotFund";
import SingnIn from "../SingnIn";
import Navbar from "../../Components/Navbar";
import "./App.css";
import { ShoppingCartProvider } from "../../Context";

const AppRoutes = () => {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/my-account", element: <MyAccount /> },
        { path: "/my-order", element: <MyOrder /> },
        { path: "/my-orders", element: <MyOrders /> },
        { path: "/singn-in", element: <SingnIn /> },
        { path: "/*", element: <NotFund /> },
    ]);

    return routes;
};

const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <Navbar />
            </BrowserRouter>
        </ShoppingCartProvider>
    );
};

export default App;
