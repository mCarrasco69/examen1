'use client'

import { useState, useContext } from "react";
import { ContextGastos } from "../context/contextGastos";

export default function PresupuestoMensual() {
    const { presupuesto, setPresupuesto, totalGastos, porcentajeGastado } = useContext(ContextGastos);
    const [nuevoPresupuesto, setNuevoPresupuesto] = useState("");

    const handleEstablecerPresupuesto = () => {
        const valor = parseFloat(nuevoPresupuesto);
        if (valor > 0) {
            setPresupuesto(valor);
            setNuevoPresupuesto("");
        }
    };

    return (
        <div className="container mt-4">
            <h4 className="mb-4">Presupuesto Mensual</h4>
            <div className="mb-4">
                <label htmlFor="presupuesto">Establecer Presupuesto Mensual</label>
                <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        id="presupuesto"
                        placeholder="Ingrese el monto"
                        value={nuevoPresupuesto}
                        onChange={(e) => setNuevoPresupuesto(e.target.value)}
                    />
                    <button 
                        className="btn btn-primary"
                        onClick={handleEstablecerPresupuesto}
                    >
                        Fijar presupuesto
                    </button>
                </div>
            </div>

            {presupuesto > 0 && (
                <div className="mt-4">
                    <h5 className="mb-3">Resumen del Presupuesto</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-2"><strong>Presupuesto Inicial:</strong> L. {presupuesto.toFixed(2)}</p>
                            <p className="mb-2"><strong>Total Gastado:</strong> L. {totalGastos.toFixed(2)}</p>
                            <p className="mb-2"><strong>Disponible:</strong> L. {(presupuesto - totalGastos).toFixed(2)}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-2"><strong>Porcentaje Gastado:</strong> {porcentajeGastado.toFixed(1)}%</p>
                            <div className="progress mb-2" style={{ height: '25px' }}>
                                <div 
                                    className={`progress-bar ${porcentajeGastado >= 100 ? 'bg-danger' : porcentajeGastado >= 80 ? 'bg-warning' : 'bg-success'}`}
                                    role="progressbar"
                                    style={{ width: `${Math.min(porcentajeGastado, 100)}%` }}
                                >
                                    {porcentajeGastado.toFixed(1)}%
                                </div>
                            </div>
                        </div>
                    </div>

                    {porcentajeGastado >= 80 && porcentajeGastado < 100 && (
                        <div className="alert alert-warning mt-3" role="alert">
                            <strong>¡Atención!</strong> Has alcanzado el 80% de tu presupuesto mensual.
                        </div>
                    )}

                    {porcentajeGastado >= 100 && (
                        <div className="alert alert-danger mt-3" role="alert">
                            <strong>¡Alerta!</strong> Has superado el límite del presupuesto, debes ajustar gastos.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
