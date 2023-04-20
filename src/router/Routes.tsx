import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Order } from '../pages/Order/Order'
import { Delivery } from '../pages/Delivery/Delivery'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/delivery" element={<Delivery />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}