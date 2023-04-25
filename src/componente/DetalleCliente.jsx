import PropTypes from 'prop-types';
export const DetalleCliente = ({ cliente }) => {
    const { nombre: nombreCliente, apellido } = cliente;
    const { pais, provincia, calle, numero } = cliente.direccion;
    return (<>
        <h3>Datos del Cliente</h3>
        <ul className="list-group">
            <li className="list-group-item active">{nombreCliente}</li>
            <li className="list-group-item">{apellido}</li>
            <li className="list-group-item">{pais} / {provincia}</li>

            <li className="list-group-item">{calle} - {numero}</li>

        </ul>
    </>)
}
DetalleCliente.propTypes ={
    cliente: PropTypes.object.isRequired
}