import React, { useState, useContext } from 'react';

import FormikContainer from './components/FormikContainer';

import { ValueContext } from './store/value-context';


function App() {
    const jungCtx = useContext(ValueContext);
    const { setFormValues, formValues, finished, setFinished } = jungCtx;

    const [ testStarted, setTestStarted ] = useState(false);

    let archetype;
    let h;


    function jungRestart() {
        setTestStarted(false);
        setFinished(false);
        setFormValues({});
    }

    if (Object.entries(formValues).length > 0) {
        if (formValues.radioOption1.endsWith('1') && formValues.radioOption2.endsWith('1') && formValues.radioOption3.endsWith('1') && formValues.radioOption4.endsWith('1') && formValues.radioOption5.endsWith('1') && formValues.radioOption6.endsWith('1') && formValues.radioOption7.endsWith('1') && formValues.radioOption8.endsWith('1')) {
            archetype = 'Персона';
            h ='Люди, у которых на первый план выходит архетип Персона, легко меняют маски в зависимости от ситуации, что позволяет им приспосабливаться к окружающему миру и вписываться в общество, в котором они живут. Этому архетипу необходимы зрители, поэтому такие люди легко находят общий язык с окружающими, привлекают внимание, обладают практически магическим магнетизмом.';
        } else if (formValues.radioOption1.endsWith('1') && formValues.radioOption2.endsWith('2') && formValues.radioOption3.endsWith('3') && formValues.radioOption4.endsWith('4') && formValues.radioOption5.endsWith('5') && formValues.radioOption6.endsWith('1') && formValues.radioOption7.endsWith('2') && formValues.radioOption8.endsWith('3')) {
            archetype = 'Творец';
        } else {
            archetype = 'Чернокнижник';
            h = 'Вам несказанно повездо! Сегодня за ваше здоровье выпьют гномы мародеры и отдадут вам последние желтки';
        }
    }



    return (
        <div className="app">
            {!testStarted && !finished && (
                <div className='btnStartContainer'>
                    <h1>Тест Юнга: 8 вопросов</h1>
                    <button type='button' onClick={() => setTestStarted(true)}>Начать тест</button>
                </div>
            )}
            {testStarted && !finished && (
                <div className='formContainer'>
                    <FormikContainer />
                </div>
            )}
            {finished && (
                <div className='btnRestartContainer'>
                    <h1>Ваш архетип: {archetype}</h1>
                    <h3>{h}</h3>
                    <button type='button' onClick={jungRestart}>Пройти заново</button>
                </div>
            )}
        </div>
    );
}

export default App;
