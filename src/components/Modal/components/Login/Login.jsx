import React from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'
import Error from '../../../Error';

import { useFormik } from 'formik';

import { loginSchema } from '../../../../validation/validationSchemas';
import { useAuthContext } from '../../../../context/AuthContext';
import { useRestInputProps } from '../../../../hooks/useRestProps';

import { loginUser } from '../../../../services/authServices';
import { loginInput } from '../../../../constant/inputData';
import { initialLoginValues } from '../../../../constant/initialValues';
import { useMutation } from 'react-query';



const Login = ({ className, modal }) => {
    const { login, error, setError } = useAuthContext();
    const { mutate, isLoading } = useMutation(loginUser, {
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
        initialValues: initialLoginValues,
        onSubmit,
        validationSchema: loginSchema,
    });

    const restInputProps = (key) => useRestInputProps(formik, key);


    return (
        <div className={` ${className}`}>
            <form onSubmit={formik.handleSubmit}>
                {loginInput.map((input) =>
                (<Input
                    key={input.id}
                    {...input}
                    {...restInputProps(`${input.name}`)}
                />)
                )}
                <div className='my-3'>
                    {error &&
                        <Error msg={error} className="text-center" />
                    }
                    <Btn text={isLoading ? "Loading..." : "دخول"} className="w-full bg-btnColor text-white" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login