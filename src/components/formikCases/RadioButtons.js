import React from "react";
import { Field, ErrorMessage } from 'formik';

import TextError from "../TextError";

function RadioButtons({ label, name, options, ...rest }) {
    return (
        <div className="formControl">
            <label htmlFor={name} className="formControlLabel">
                <h2>{label}</h2>
            </label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map((option) => {
                            return (
                                <React.Fragment key={option.key}>
                                    <div className="formInputContainer">
                                        <input
                                            type='radio'
                                            id={option.value}
                                            {...field}
                                            value={option.value}
                                            checked={field.value === option.value}
                                        />
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </div>
                                </React.Fragment>
                            );
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
};

export default RadioButtons;