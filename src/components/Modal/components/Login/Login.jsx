import React, { useState } from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'

import { useFormik } from 'formik';

import { loginSchema } from '../../../../validation/validationSchemas';
import { useRestInputProps } from '../../../../hooks/useRestProps';
import Error from '../../../Error';
// import { useAuthContext } from './../../../../context/AuthContext';
import axios from 'axios';



const Login = ({ className }) => {

    // const { loading, error, login } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = async ({ email, password }) => {
        setLoading(true);
        const res = await axios
            .post(`https://student.valuxapps.com/api/login`, { email, password })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
        setError(res.data.message)
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