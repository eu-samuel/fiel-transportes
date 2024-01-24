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