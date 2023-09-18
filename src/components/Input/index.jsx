import React from 'react';

const Input = ({ area, type, placeholder, label, name }) => {
    return (
        <div className='w-full pt-5'>
            <label htmlFor="">{label}</label>
            {area ? (
                <textarea
                    className='w-full border-2 border-solid border-borderColor rounded-lg resize-none p-2'
                    rows={4}
                    name={name}
                    placeholder={placeholder}
                ></textarea>
            ) : (
                <input type={type} placeholder={placeholder} name={name} className='w-full border-2 border-solid border-borderColor rounded-lg p-2' />
            )}
        </div>
    );
};

export default Input;
