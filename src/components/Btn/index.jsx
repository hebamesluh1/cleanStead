import React from 'react'

const Btn = ({ text, type }) => {
    return (
        <button
            type={type}
            className="relative rounded-full bg-btnColor px-4 py-2 text-white hover:bg-gray-300 focus:outline-none"
        >
            {text}
        </button>
    )
}

export default Btn