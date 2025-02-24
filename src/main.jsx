import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/App";
import Layout from "./Components/Layout";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Layout>
            <App />
        </Layout>
    </StrictMode>
);
