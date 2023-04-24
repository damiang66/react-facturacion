
import { getfactura } from "../services/getFactura"

export const FacturaApp = () => {
    const { id, nombre, cliente, compañia, items } = getfactura();
    const { nombre: nombreCliente, apellido } = cliente;
    const { pais, provincia, calle, numero } = cliente.direccion;
    const { nombre: nombreCompañia, cuit } = compañia;
   // const { producto, precio, cantidad } = items
    return (
        <>
            <div className="container">
                <div className="card my-3" >
                    <div className="card-header">
                        Ejemplo de Factura
                    </div>
              
                <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">Id: {id}</li>
                    <li className="list-group-item">Nombre: {nombre}</li>
                </ul>
                <div className="row my-3">
                    <div className="col">
                        <h3>Datos del Cliente</h3>
                        <ul className="list-group">
                            <li className="list-group-item active">{nombreCliente}</li>
                            <li className="list-group-item">{apellido}</li>
                            <li className="list-group-item">{pais} / {provincia}</li>
                           
                            <li className="list-group-item">{calle} - {numero}</li>
                          
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Datos de la compañia</h3>
                        <ul className="list-group">
                            <li className="list-group-item active">{nombreCompañia}</li>
                            <li className="list-group-item">{cuit}</li>
                        </ul>
                    </div>
                </div>
                <h3>Productos de la factura</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>producto</th>
                            <th>precio</th>
                            <th>cantidad</th>
                        </tr>

                    </thead>
                    <tbody>
                        {items.map(({ id, producto, precio, cantidad }) => {
                            return (
                                <tr key={id}>
                                    <td>{producto}</td>
                                    <td>{precio}</td>
                                    <td>{cantidad}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </>
    )
}