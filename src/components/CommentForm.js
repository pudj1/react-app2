import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const CommentForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comment: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Wrong email').required('Required'),
            comment: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form">
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email">Email:</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="comment">Comment:</label>
            <textarea
                id="comment"
                name="comment"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
            />
            {formik.touched.comment && formik.errors.comment ? (
                <div>{formik.errors.comment}</div>
            ) : null}

            <button type="submit">Send comment</button>
        </form>
    );
};
