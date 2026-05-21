'use client'
import { createContext } from "react";

export interface Gasto {
    idgasto?: number;
    categoria: string;
    monto: number;
    fecha: string;
    descripcion?: string;
}

interface ContextProps {
    isAuthenticated: boolean;
    login: (usuario: string, contraseña: string) => boolean;
    logout: () => void;
    
    presupuesto: number;
    setPresupuesto: (valor: number) => void;
    
    gastos: Gasto[];
    agregarGasto: (gasto: Gasto) => void;
    cargarGastos: () => void;
    
    categorias: string[];
    agregarCategoria: (categoria: string) => void;
    
    totalGastos: number;
    porcentajeGastado: number;
}

export const ContextGastos = createContext<ContextProps>({
    isAuthenticated: false,
    login: () => false,
    logout: () => {},
    
    presupuesto: 0,
    setPresupuesto: () => {},
    
    gastos: [],
    agregarGasto: () => {},
    cargarGastos: () => {},
    
    categorias: ["Comida", "Transporte", "Entretenimiento"],
    agregarCategoria: () => {},
    
    totalGastos: 0,
    porcentajeGastado: 0
});
