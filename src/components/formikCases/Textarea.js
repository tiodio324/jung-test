import React from "react";
import { Field, ErrorMessage } from 'formik';

import TextError from "../TextError";

function Textarea({ label, name, ...rest }) {
    return (
        <div className="formControl">
            <label htmlFor={name} className="formControlLabel">
                <h2>{label}</h2>
            </label>
            <Field as='textarea' name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
};

export default Textarea;