'use client'

import { useState } from "react";
import { Producto } from "../models/productos";
import { ContextCarrito } from "../context/contextCarrito";

export default function ProviderCarrito({ children }: { children: React.ReactNode }) {

    const [carrito, setCarrito] = useState<Producto[]>([]);
    const agregarCarrito = (producto: Producto) => {

        setCarrito((prev) => [...prev, producto]);

    };

    const eliminarProducto = (id?: number) => {
        const nuevoCarrito = carrito.filter(
            (producto) => producto.id !== id
        );
        setCarrito(nuevoCarrito);
    };

    const subtotal = carrito.reduce(
        (acc, producto) => acc + producto.precio,0);
    const totalISV = carrito.reduce(
        (acc, producto) => acc + producto.isvProducto,0);
    const totalPagar = subtotal + totalISV;
    return (
        <ContextCarrito.Provider
            value={{
                carrito,
                agregarCarrito,
                eliminarProducto,
                subtotal,
                totalISV,
                totalPagar
            }}>

            {children}
        </ContextCarrito.Provider>);
        }