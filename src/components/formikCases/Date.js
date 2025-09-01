import React from "react";
import { Field, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TextError from "../TextError";

function Date({ label, name, ...rest }) {
    return (
        <div className="formControl">
            <label htmlFor={name} className="formControlLabel">
                <h2>{label}</h2>
            </label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form;
                        const { value } = field;

                        return <DatePicker
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={(val) => setFieldValue(name, val)}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
};

export default Date;