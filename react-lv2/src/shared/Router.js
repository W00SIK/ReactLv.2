import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import DetailPage from '../pages/DetailPage'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/DetailPage" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router