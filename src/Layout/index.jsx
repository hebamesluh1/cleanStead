import React, { Suspense } from 'react'


import { Outlet } from 'react-router-dom'


import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'



const Layout = () => {
    return (
        <Container>
            <Header />
            <main style={{paddingTop:"100px"}}>
            <Suspense fallback="Loading...">
                <Outlet />
            </Suspense>
            </main>
            <Footer />
        </Container>
    )
}

export default Layout