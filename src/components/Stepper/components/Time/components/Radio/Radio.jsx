import React from 'react'

const Radio = ({text}) => {
    return (
        <div className='p-2 border border-borderColor border-2 rounded-md'>
            <label className='flex items-center justify-center text-textColor'>
                <input type="radio" name='radio' className='mx-2'/>
                {text}
            </label>
        </div>
    )
}

export default Radio