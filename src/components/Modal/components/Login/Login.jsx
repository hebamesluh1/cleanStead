import React from 'react'

import Btn from '../../../Btn'
import Input from '../../../Input'
import Error from '../../../Error';

import { useFormik } from 'formik';

import { loginSchema } from '../../../../validation/validationSchemas';
import { useAuthContext } from '../../../../context/AuthContext';
import { useRestInputProps } from '../../../../hooks/useRestProps';

import axios from 'axios';



const Login = ({ className, modal }) => {

    const { loading, setLoading, error, setError, setToken, login } = useAuthContext();

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
        if (res.data.status) {
            setToken(res.data.token)
            setError("");
            login();
            modal(false);
        } else {
            setError(res.data.message)
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