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



const Login = ({ className, modal }) => {

    const { loading, setLoading, error, setError, login } = useAuthContext();

    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = async ({ email, password }) => {
        try {
            setLoading(true);
            const { success, token, message } = await loginUser({ email, password });
            if (success) {
                setError('');
                login(token);
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
        validationSchema: loginSchema,
    });

    const restInputProps = (key) => useRestInputProps(formik, key);


    return (
        <div className={` ${className}`}>
            <form onSubmit={formik.handleSubmit}>
                {error &&
                    <Error msg={error} className="text-center" />
                }
                {loginInput.map((input) =>
                (<Input
                    key={input.id}
                    {...input}
                    {...restInputProps(`${input.name}`)}
                />)
                )}
                <div className='my-3'>
                    <Btn text={loading ? "Loading..." : "دخول"} className="w-full bg-btnColor text-white" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login