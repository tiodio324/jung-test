import React, { useContext } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControl from "./FormikControl";
import { Questions } from "../constants/radioOptions";

import { ValueContext } from "../store/value-context";


function FormikContainer() {
    const jungCtx = useContext(ValueContext);
    const { setFormValues, setFinished } = jungCtx;

    // const dropdownOptions = [
    //     { key: 'Select an option', value: '' },
    //     { key: 'Яблоко', value: 'select1' },
    //     { key: 'Мёд', value: 'select2' },
    //     { key: 'Ель', value: 'select3' }
    // ];
    // const checkboxOptions = [
    //     { key: 'Option 1', value: 'checkbox1' },
    //     { key: 'Option 2', value: 'checkbox2' },
    //     { key: 'Option 3', value: 'checkbox3' }
    // ];

    const initialValues = {
        radioOption1: '',
        radioOption2: '',
        radioOption3: '',
        radioOption4: '',
        radioOption5: '',
        radioOption6: '',
        radioOption7: '',
        radioOption8: '',

        // email: '',
        // description: '',
        // selectOption: '',
        // checkboxOption: [],
        // date: null
    };
    
    const validationSchema = Yup.object({
        radioOption1: Yup.string().required('Required'),
        radioOption2: Yup.string().required('Required'),
        radioOption3: Yup.string().required('Required'),
        radioOption4: Yup.string().required('Required'),
        radioOption5: Yup.string().required('Required'),
        radioOption6: Yup.string().required('Required'),
        radioOption7: Yup.string().required('Required'),
        radioOption8: Yup.string().required('Required'),

        // email: Yup.string().email('Invalid email format').required('Required'),
        // description: Yup.string().required('Required'),
        // selectOption: Yup.string().required('Required'),
        // checkboxOption: Yup.array().min(1, 'At least one checkbox must be selected').required('Required'),
        // date: Yup.date().required('Required').nullable()
    });
    
    function onSubmit(values, submitProps) {
        // console.log('Submit values: ', values);
        setFormValues(values);
        setFinished(true);
        submitProps.setSubmitting(false);
    };



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
                    <Form className="form">
                        {/* <div className="formControlContainer">
                            <FormikControl control='input' type='email' label='E-mail' name='email' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl control='textarea' label='Description' name='description' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={dropdownOptions} control='select' label='Select a topic' name='selectOption' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={checkboxOptions} control='checkbox' label='Checkbox topics' name='checkboxOption' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl control='date' label='Birthday' name='date' />
                        </div> */}

                        <div className="formControlContainer">
                            <FormikControl options={Questions.question1} control='radio' label='В конфликте ваш коллега начал переходить на личности. Ваши действия?' name='radioOption1' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={Questions.question2} control='radio' label='Каким будет ваш идеальный день рождения?' name='radioOption2' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={Questions.question3} control='radio' label='Как бы вы описали основную цель своей жизни?' name='radioOption3' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={Questions.question4} control='radio' label='Ваше главное преимущество?' name='radioOption4' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={Questions.question5} control='radio' label='Ваш главный недостаток?' name='radioOption5' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={Questions.question6} control='radio' label='Какое хобби вы бы предпочли?' name='radioOption6' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={Questions.question7} control='radio' label='Кем вы были в школе?' name='radioOption7' />
                        </div>
                        <div className="formControlContainer">
                            <FormikControl options={Questions.question8} control='radio' label='Верите ли вы в высшие силы, судьбу?' name='radioOption8' />
                        </div>

                        <div className="btnSubmitContainer">
                            <button type="submit" className="btnSubmit" disabled={!(formik.isValid || formik.isSubmitting)}>Завершить</button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
};

export default FormikContainer;