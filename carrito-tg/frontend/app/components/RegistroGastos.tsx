'use client'

import { useState, useContext, useEffect } from "react";
import { ContextGastos } from "../context/contextGastos";

export default function RegistroGastos() {
    const { presupuesto, gastos, agregarGasto, cargarGastos, categorias, agregarCategoria, totalGastos } = useContext(ContextGastos);
    const [monto, setMonto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");

    useEffect(() => {
        cargarGastos();
    }, []);

    const handleAgregarGasto = (e: React.FormEvent) => {
        e.preventDefault();
        if (!monto || !categoria || !fecha) {
            alert("Por favor complete todos los campos obligatorios");
            return;
        }

        const gasto = {
            categoria,
            monto: parseFloat(monto),
            fecha,
            descripcion: descripcion || ""
        };

        agregarGasto(gasto);
        setMonto("");
        setDescripcion("");
        setFecha("");
    };

    const handleAgregarCategoria = () => {
        if (nuevaCategoria && !categorias.includes(nuevaCategoria)) {
            agregarCategoria(nuevaCategoria);
            setNuevaCategoria("");
        }
    };

    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-info text-white">
                    <h4 className="mb-0">Registro de Gastos</h4>
                </div>
                <div className="card-body">
                    {presupuesto > 0 && (
                        <div className="alert alert-info mb-3">
                            <strong>Presupuesto Inicial:</strong> L. {presupuesto.toFixed(2)}
                        </div>
                    )}

                    <form onSubmit={handleAgregarGasto}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="monto" className="form-label">Monto *</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="monto"
                                    placeholder="Ingrese el monto"
                                    value={monto}
                                    onChange={(e) => setMonto(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="categoria" className="form-label">Categoría *</label>
                                <select
                                    className="form-control"
                                    id="categoria"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                    required
                                >
                                    <option value="">Seleccione una categoría</option>
                                    {categorias.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripción</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descripcion"
                                placeholder="Breve descripción del gasto"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="fecha" className="form-label">Fecha *</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Agregar Gasto
                        </button>
                    </form>

                    <div className="mt-4">
                        <h5 className="mb-3">Personalizar Categorías</h5>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nueva categoría"
                                value={nuevaCategoria}
                                onChange={(e) => setNuevaCategoria(e.target.value)}
                            />
                            <button 
                                className="btn btn-secondary"
                                onClick={handleAgregarCategoria}
                            >
                                Agregar Categoría
                            </button>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                            {categorias.map((cat) => (
                                <span key={cat} className="badge bg-primary">{cat}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <h5 className="mb-3">Gastos Registrados</h5>
                        {gastos.length === 0 ? (
                            <p className="text-muted">No hay gastos registrados</p>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Categoría</th>
                                            <th>Descripción</th>
                                            <th>Monto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gastos.map((gasto, index) => (
                                            <tr key={index}>
                                                <td>{gasto.fecha}</td>
                                                <td>{gasto.categoria}</td>
                                                <td>{gasto.descripcion || "-"}</td>
                                                <td>L. {gasto.monto.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className="table-primary">
                                            <td colSpan={3} className="text-end"><strong>Total:</strong></td>
                                            <td><strong>L. {totalGastos.toFixed(2)}</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
