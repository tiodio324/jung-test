import React from "react";
import { Field, ErrorMessage } from 'formik';

import TextError from "../TextError";

function Input({ label, name, ...rest }) {
    return (
        <div className="formControl">
            <label htmlFor={name} className="formControlLabel">
                <h2>{label}</h2>
            </label>
            <Field name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
};

export default Input;