'use client'

import { useState, useContext } from "react";
import { ContextGastos } from "../context/contextGastos";

export default function Login() {
    const { login } = useContext(ContextGastos);
    const [usuario, setUsuario] = useState("");
    const [contraseña, setcontraseña] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const exito = login(usuario, contraseña);
        if (!exito) {
            setError("Usuario o contraseña son incorrectos por favor intente nuevamente");
        } else {
            setError("Bienvenido");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h4 className="text-center mb-4">MIS GASTOS DE MES</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="usuario">Usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                id="usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contraseña">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="contraseña"
                                value={contraseña}
                                onChange={(e) => setcontraseña(e.target.value)}
                                required
                            />
                        </div>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary w-100">
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
