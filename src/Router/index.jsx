import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout';
import { PATHS } from '../mock/data';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));


const Router = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Layout />}>

                <Route
                    path={PATHS.HOME}
                    element={<Home />} />

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