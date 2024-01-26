import { useState, createContext } from "react";


export const GlobalContext = createContext();

export const contexts = () => {
    
    const [store, setStore] = useState({
        user: {
            name: "",
            email: "",
            password: "",
            phone: ""
        }
    })
        
    return { store, setStore }
}

export const setMask = (type, input) => {
    if (type === "fixo") {
        return "(00) 0000-0000"
    } if (type === "celular") {
        return "(00) 00000-0000"
    }
}