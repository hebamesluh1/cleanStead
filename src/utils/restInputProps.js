function restInputProps(formik, key) {
  return {
    name: key,
    onChange: formik.handleChange,
    value: formik.values[key],
    onBlur: formik.handleBlur,
    error: formik.touched[key] && formik.errors[key],
    errorMessage:
      formik.touched[key] && formik.errors[key] ? formik.errors[key] : "",
    touched: formik.touched[key],
  };
}

export { restInputProps };
