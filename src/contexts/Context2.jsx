import { createContext, useContext, useState } from 'react';

const Context1 = createContext();

export function useContext2() {
    return useContext(Context1);
}

export function Context2Provider({ children }) {
    const [data, setData] = useState({name:"1",surname:"2"});

    return (
        <Context1.Provider value={{ data, setData }}>
            {children}
        </Context1.Provider>
    );
}