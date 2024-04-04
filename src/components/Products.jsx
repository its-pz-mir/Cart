import React, { useState, useEffect } from "react";
import { add } from "../app/carSlice";
import { useDispatch } from "react-redux";

export default function Products() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    return (
        <>
            <div className="grid grid-cols-4 space-y-8">
                {
                    products.map(product => (
                        <div className="card mx-auto flex flex-col justify-center items-center px-8 py-4 rounded-md space-y-2 bg-slate-100 w-80 h-96" key={product.id} >
                            <img src={product.image} alt={product.title} className="w-52 h-52 mx-auto" />
                            <h4 className="text-center">{product.title}</h4>
                            <h5 className="text-center">{product.price}</h5>
                            <button className="bg-green-400 px-4 py-2 rounded-full font-bold" onClick={() => handleAdd(product)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}