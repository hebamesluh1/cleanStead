import React, { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import { Header, Footer, Container, Spinner } from '../components'



const Layout = () => {
    return (
        <Container>
            <Header />
            <main style={{ paddingTop: "10%" }}>
                <Suspense fallback={<Spinner />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </Container>
    )
}

export default Layout