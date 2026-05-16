'use client'
import { createContext } from "react";
import { Producto } from "../models/productos";

interface ContextProps {
    carrito: Producto[];

    agregarCarrito: (producto: Producto) => void;
    eliminarProducto: (id?: number) => void;

    subtotal: number;
    totalISV: number;
    totalPagar: number;

}

    export const ContextCarrito = createContext<ContextProps>({
    carrito: [],

    agregarCarrito: () => {},
    eliminarProducto: () => {},

    subtotal: 0,
    totalISV: 0,
    totalPagar: 0

});