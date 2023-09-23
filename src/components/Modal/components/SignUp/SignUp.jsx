import React, { useState } from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'
import Error from '../../../Error';

import { useFormik } from 'formik';

import { signupSchems } from '../../../../validation/validationSchemas';
import { useRestInputProps } from '../../../../hooks/useRestProps';
import { useAuthContext } from '../../../../context/AuthContext';

import { registerUser } from '../../../../services/authServices';
import { signUpInput } from '../../../../constant/inputData';



const SignUp = ({ className, modal }) => {

    const { loading, setLoading, error, setError, setToken, login } = useAuthContext();

    const initialValues = {
        username: "",
        phone: "",
        email: "",
        password: "",
    };

    const onSubmit = async ({ email, password, username, phone }) => {
        try {
            setLoading(true);

            const { success, token, message } = await registerUser({
                email,
                password,
                username,
                phone,
            });

            if (success) {
                setError('');
                localStorage.setItem('token', token);
                setError("");
                setToken(token);
                login();
                modal(false);

            } else {
                setError(message);
            }
        } finally {
            setLoading(false);
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: signupSchems,
    });

    const restInputProps = (key) => useRestInputProps(formik, key);



    return (
        <div className={` ${className}`}>
            {error &&
                <Error msg={error} className="text-center" />
            }
            <form onSubmit={formik.handleSubmit}>
                {signUpInput.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        {...restInputProps(`${input.name}`)}
                    />
                ))}
                <div className='my-3'>
                    <Btn text={`${loading ? "loading..." : "انشاء حساب"}`} className="w-full bg-btnColor text-white" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default SignUp