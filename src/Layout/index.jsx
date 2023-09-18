import React, { Suspense } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback="Loading...">
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout