import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const items = useSelector((state) => state.cart)
    return (
        <>
            <div className="flex justify-between items-center px-80 py-4 text-white bg-slate-400">
                <span className="font-bold text-red-700 text-2xl">Redux Store</span>
                <div className="flex space-x-10 text-lg underline">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/cart"}>Cart</Link>
                </div>
                <span className="font-bold text-lg ">Cart Items : {items.length}</span>
            </div>
        </>
    )
}