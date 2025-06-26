import { createContext, useState } from "react";

//PASO: 1 - Crear el contexto
// Este es el que tenemos que consumir
export const FiltersContext = createContext()

//PASO: 2 - Crear el Provider, para proveer el contexto
// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 250
    })
    return (
        <FiltersContext.Provider value={{
           filters, setFilters
        }} >
            {children}
        </FiltersContext.Provider >
    )
}