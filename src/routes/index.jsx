import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/Home'

const index = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} />
        </BrowserRouter>
    )
}

export default index
