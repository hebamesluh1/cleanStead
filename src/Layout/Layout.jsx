import React, { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import { Header, Footer, Container } from '../components/index'



const Layout = ({authorized}) => {
    return (
        <Container>
            <Header authorized={authorized} />
            <main style={{ paddingTop: "10%" }}>
                <Suspense fallback="Loading...">
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </Container>
    )
}

export default Layout