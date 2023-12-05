import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const ProductForm = () => {
    const formik = useFormik({
        initialValues: {
            productName: '',
            price: '',
        },
        validationSchema: Yup.object({
            productName: Yup.string().required('Required'),
            price: Yup.number().required('Required').positive('Price must be positive'),
        }),
        onSubmit: (values) => {
            // Product submission logic goes here
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form">
            <label htmlFor="productName">Product Name:</label>
            <input
                id="productName"
                name="productName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.productName}
            />
            {formik.touched.productName && formik.errors.productName ? (
                <div>{formik.errors.productName}</div>
            ) : null}

            <label htmlFor="price">Price:</label>
            <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
            ) : null}

            <button type="submit">Add Product</button>
        </form>
    );
};
