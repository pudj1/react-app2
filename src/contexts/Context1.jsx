import { createContext, useContext, useState } from 'react';

const Context1 = createContext();

export function useContext1() {
    return useContext(Context1);
}

export function Context1Provider({ children }) {
    const [data, setData] = useState({name:"dima",surname:"slabyi"});

    return (
        <Context1.Provider value={{ data, setData }}>
            {children}
        </Context1.Provider>
    );
}