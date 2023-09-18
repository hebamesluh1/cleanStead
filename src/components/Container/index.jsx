import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='container mx-auto lg:max-w-4xl xl:max-w-5xl'>
            {children}
        </div>
    )
}

export default Container