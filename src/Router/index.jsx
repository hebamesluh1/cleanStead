import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router