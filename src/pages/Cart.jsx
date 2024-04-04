import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../app/carSlice";

export default function Cart() {
    const Products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeCarat = (product) => {
        dispatch(remove(product))
    }

    return (
        <>
            <h1 className="text-3xl text-center py-4 text-red-500">Cart Page</h1>
            <p className="text-center py-10">Here are our some Products that you can remove</p>
            <div className="space-y-6">
                {
                    Products.map(product => (
                        <div key={product.id} className="flex justify-between items-center bg-slate-200 py-4 rounded-full px-52">
                            <img src={product.image} alt={product.title} className="w-14" />
                            <h3>{product.title}</h3>
                            <h5>$ {product.price}</h5>
                            <button className="bg-green-400 px-4 py-2 rounded-full font-bold" onClick={() => removeCarat(product.id)}>Remove</button>
                        </div>
                    ))
                }

            </div>
        </>
    )
}