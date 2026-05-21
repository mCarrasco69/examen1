'use client'

import { useState, useEffect } from "react";
import { ContextGastos, Gasto } from "../context/contextGastos";

export default function ProviderGastos({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [presupuesto, setPresupuesto] = useState(0);
    const [gastos, setGastos] = useState<Gasto[]>([]);
    const [categorias, setCategorias] = useState<string[]>(["Comida", "Transporte", "Entretenimiento"]);

    const login = (usuario: string, contraseña: string): boolean => {
        if (usuario === "admin" && contraseña === "admin123") {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const agregarGasto = async (gasto: Gasto) => {
        try {
            const response = await fetch('http://localhost:5000/gasto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    categoria: gasto.categoria,
                    monto: gasto.monto.toString(),
                    fecha: gasto.fecha
                }),
            });

            if (response.ok) {
                setGastos((prev) => [...prev, gasto]);
            }
        } catch (error) {
            console.error('Error al guardar gasto:', error);
        }
    };

    const cargarGastos = async () => {
        try {
            const response = await fetch('http://localhost:5000/gasto');
            if (response.ok) {
                const data = await response.json();
                const gastosConvertidos = data.map((g: any) => ({
                    ...g,
                    monto: parseFloat(g.monto)
                }));
                setGastos(gastosConvertidos);
            }
        } catch (error) {
            console.error('Error al cargar gastos:', error);
        }
    };

    const agregarCategoria = (categoria: string) => {
        if (!categorias.includes(categoria)) {
            setCategorias((prev) => [...prev, categoria]);
        }
    };

    const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
    const porcentajeGastado = presupuesto > 0 ? (totalGastos / presupuesto) * 100 : 0;

    return (
        <ContextGastos.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                presupuesto,
                setPresupuesto,
                gastos,
                agregarGasto,
                cargarGastos,
                categorias,
                agregarCategoria,
                totalGastos,
                porcentajeGastado
            }}>

            {children}
        </ContextGastos.Provider>);
}
