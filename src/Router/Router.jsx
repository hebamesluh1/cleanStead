import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from '../Layout';
import { PATHS } from '../mock/data';
import { useAuthContext } from '../context/AuthContext';

const Home = lazy(() => import('../pages/HomePage'));
const About = lazy(() => import('../pages/AboutPage'));
const Services = lazy(() => import('../pages/ServicesPage'));
const Contact = lazy(() => import('../pages/ContactPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));


const Router = () => {
    const { authorized } = useAuthContext();
    return (
        <Routes>
            <Route
                path='/'
                element={<Layout authorized={authorized} />}>
                <Route
                    path="/"
                    element={<Home />} />
                {authorized ?
                    <>
                        <Route
                            path={PATHS.ABOUT}
                            element={<About />} />

                        <Route
                            path={PATHS.SERVICES}
                            element={<Services />} />

                        <Route
                            path={PATHS.CONTACT}
                            element={<Contact />} />

                    </>
                    :
                    <>
                        <Route
                            path={PATHS.HOME}
                            element={<Navigate to={PATHS.HOME} />} />
                    </>
                }
                <Route path={PATHS.NOTFOUND} element={<NotFound />} />
                <Route
                    path='*'
                    element={<Navigate to={PATHS.NOTFOUND} />} />

            </Route>
        </Routes>
    )
}

export default Router