import React from "react";
import Products from "../components/Products";

export default function Home() {
    return (
        <>
            <h1>Welcome to the Redux Toolkit Store</h1>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </>
    )
}