import React, { createContext, useState } from "react";

export const ValueContext = createContext({
    formValues: {},
    setFormValues: () => {},
    finished: false,
    setFinished: () => {},
});

export default function ValueContextProvider({ children }) {
    const [formValues, setFormValues] = useState({});
    const [finished, setFinished] = useState(false);


    const value = {
        formValues: formValues,
        setFormValues: setFormValues,
        finished: finished,
        setFinished: setFinished,
    }

    return <ValueContext.Provider value={value}>{children}</ValueContext.Provider>
}