"use client";

import { useContext, useState, useEffect } from "react";
import { ContextGastos } from "./context/contextGastos";
import Login from "./components/Login";
import PresupuestoMensual from "./components/PresupuestoMensual";
import RegistroGastos from "./components/RegistroGastos";

export default function Home() {
    const { isAuthenticated, logout } = useContext(ContextGastos);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    if (!isAuthenticated) {
        return <Login />;
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="mb-0">Administrador de Gastos Personales</h1>
                <button className="btn btn-danger" onClick={logout}>
                    Cerrar Sesión
                </button>
            </div>
            <PresupuestoMensual />
            <RegistroGastos />
        </div>
    );
}