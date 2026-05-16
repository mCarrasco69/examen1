import { data } from "./json/data";
export default function Home() {
    return (
        <div className="container mt-4">

            <h1 className="text-center mb-4">Carrito de Compras</h1>
            <div className="row">
                {data.map((producto) => (

                    <div className="col-md-4 mb-4" key={producto.id}>
                        <div className="card h-100 shadow">
                            <img
                                src={producto.imagen}
                                className="card-img-top"
                                alt={producto.nombre}/>

                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>

                                <p className="card-text">{producto.descripcion}</p>
                                <p><strong>Precio:</strong>{" "}L. {producto.precio}</p>
                                <p><strong>ISV:</strong>{" "}L. {producto.isvProducto}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
);
}