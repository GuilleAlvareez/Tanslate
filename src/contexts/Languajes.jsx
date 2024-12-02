import React, { useState } from "react";

// Crear el contexto
export const Languajes = React.createContext();

// Proveedor del contexto
export const LanguajesProvider = ({ children }) => {
    const [languajesSelected, setLanguajesSelected] = useState({
        src: "en",
        dst: "es",
        msg: ''
    });

    return (
        <Languajes.Provider value={{ languajesSelected, setLanguajesSelected}}>
            {children}
        </Languajes.Provider>
    );
};
