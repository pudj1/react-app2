import React from 'react';
import { useField } from 'formik';

export const MyCustomInput = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
      <>
        <label>
          {label}
          <input {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };