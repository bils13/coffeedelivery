import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Order } from '../pages/Order/Order'
import { Delivery } from '../pages/Delivery/Delivery'
import { CartContextProvider } from '../context/Cart'

export const Router = () => {
    return (
        <BrowserRouter>
            <CartContextProvider>
                    <Routes>
                        <Route>
                            <Route path="/" element={<Home />} />
                            <Route path="/order" element={<Order />} />
                            <Route path="/delivery" element={<Delivery />} />
                        </Route>
                    </Routes>
            </CartContextProvider>
        </BrowserRouter>
    )
}