"use client";

import React from 'react'
import useCart from "../../../hooks/useCart";

export default function Page() {
    const cart = useCart();
    const data = {id: 1, title: "test", price: 100, description: "test", img: "https://cdn-icons-png.flaticon.com/512/2175/2175188.png", createdAt: "2019", categoryId: 1, archived: false, featured: true, sizeId: 1, storeId: "f47ac10b-58cc-4372-a567-0e02b2c3d479"}
    const addToCard = () => {
        cart.addItem(data)
    }

    return (
        <button onClick={addToCard}>test</button>
    )
}