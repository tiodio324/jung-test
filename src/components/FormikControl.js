import React from "react";

import Input from "./formikCases/Input";
import Textarea from "./formikCases/Textarea";
import Select from "./formikCases/Select";
import RadioButtons from "./formikCases/RadioButtons";
import CheckboxGroup from "./formikCases/CheckboxGroup";
import Date from "./formikCases/Date";

function FormikControl({ control, ...rest }) {
    switch(control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'date':
            return <Date {...rest} />
        default: return null
    };
};

export default FormikControl;