"use client";

import { useContext } from "react";
import { ContextCarrito } from "../context/contextCarrito";
import { Producto } from "../models/productos";

export default function BotonAgregar({ producto }: { producto: Producto }) {
    const { agregarCarrito } = useContext(ContextCarrito);

    return (
        <button 
            className="btn btn-primary w-100 mt-3"
            onClick={() => agregarCarrito(producto)}
        >
            Agregar al carrito
        </button>
    );
}
