import React, { useState } from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'
import Error from '../../../Error';

import { useFormik } from 'formik';

import { signupSchems } from '../../../../validation/validationSchemas';
import { restInputProps } from '../../../../utils/restInputProps';
import { useAuthContext } from '../../../../context/AuthContext';

import { registerUser } from '../../../../services/auth.services';
import { signUpInput } from '../../../../constant/inputData';

import { initialSignupValues } from '../../../../constant/initialValues'
import { useMutation } from 'react-query';



const SignUp = ({ className, modal }) => {
    const { login, error, setError } = useAuthContext();
    const { mutate, isLoading } = useMutation(registerUser, {
        onSuccess: ({ data }) => {
            if (!data.status) {
                setError(data.message)
            } else {
                login(data.token);
                modal(false);
                setError('');
            }
        }
    })
    const onSubmit = async ({ email, password, username, phone }) => {
        mutate({
            email,
            password,
            username,
            phone
        })
    }

    const formik = useFormik({
        initialValues: initialSignupValues,
        onSubmit,
        validationSchema: signupSchems,
    });

    return (
        <div className={` ${className}`}>
            <form onSubmit={formik.handleSubmit}>
                {signUpInput.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        {...restInputProps(formik, input.name)}
                    />
                ))}
                <div className='my-3'>
                    {error &&
                        <Error msg={error} className="text-center" />
                    }
                    <Btn text={`${isLoading ? "loading..." : "انشاء حساب"}`} className="w-full bg-btnColor text-white" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default SignUp