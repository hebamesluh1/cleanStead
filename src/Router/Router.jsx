import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '../Layout';
import { PATHS } from '../mock/data';

const Home = lazy(() => import('../pages/HomePage'));
const About = lazy(() => import('../pages/AboutPage'));
const Services = lazy(() => import('../pages/ServicesPage'));
const Contact = lazy(() => import('../pages/ContactPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));


const Router = () => {
    return (
        <Routes>
                    <Route
                path='/'
                element={<Layout home/>}>
            <Route
                path="/"
                element={<Home />} />
                </Route>

                <Route
                path='/'
                element={<Layout/>}>

                <Route
                    path={PATHS.ABOUT}
                    element={<About />} />

                <Route
                    path={PATHS.SERVICES}
                    element={<Services />} />

                <Route
                    path={PATHS.CONTACT}
                    element={<Contact />} />

                <Route
                    path='*'
                    element={<NotFound />} />

            </Route>
        </Routes>
    )
}

export default Router