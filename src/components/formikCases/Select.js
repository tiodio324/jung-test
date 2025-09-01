import React from "react";
import { Field, ErrorMessage } from 'formik';

import TextError from "../TextError";

function Select({ label, name, options, ...rest }) {
    return (
        <div className="formControl">
            <label htmlFor={name} className="formControlLabel">
                <h2>{label}</h2>
            </label>
            <Field as='select' name={name} id={name} {...rest}>
                {
                    options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>{option.key}</option>
                        );
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
};

export default Select;