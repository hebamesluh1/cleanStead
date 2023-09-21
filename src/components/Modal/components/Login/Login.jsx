import React from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'
import Error from '../../../Error';

import { useFormik } from 'formik';

import { loginSchema } from '../../../../validation/validationSchemas';
import { useAuthContext } from '../../../../context/AuthContext';
import { useRestInputProps } from '../../../../hooks/useRestProps';

import { loginUser } from '../../../../services/authServices';



const Login = ({ className, modal }) => {

    const { loading, setLoading, error, setError, setToken, login } = useAuthContext();

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
                localStorage.setItem('token', token);
                login();
                modal(false);
                setToken(token)
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
                <Input
                    type="text"
                    placeholder="الايميل"
                    label="أدخل الايميل"
                    icons
                    mail
                    {...restInputProps("email")}
                />
                <Input
                    type="password"
                    placeholder="كلمة المرور"
                    label="أدخل كلمة المرور "
                    icons
                    pass
                    {...restInputProps("password")}
                />
                <div className='my-3'>
                    <Btn text={loading ? "Loading..." : "دخول"} className="w-full bg-btnColor text-white" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login