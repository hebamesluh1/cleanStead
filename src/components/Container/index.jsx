import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='mx-auto max-w-7xl md:max-w-4xl'>
            {children}
        </div>
    )
}

export default Container