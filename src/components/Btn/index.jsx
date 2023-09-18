import React from 'react'

const Btn = ({text,type}) => {
    return (
        <button
        type={type}
            className="relative rounded-full bg-btnColor px-4 py-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
            {text}
        </button>
    )
}

export default Btn