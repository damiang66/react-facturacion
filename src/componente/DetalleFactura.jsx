import PropTypes from 'prop-types';
export const DetalleFactura = ({id,nombre})=>{
    return (
        <>
         <ul className="list-group">
                    <li className="list-group-item">Id: {id}</li>
                    <li className="list-group-item">Nombre: {nombre}</li>
                </ul>
        </>
    )

}
DetalleFactura.propTypes = {
    id: PropTypes.number.isRequired,
    nombre:PropTypes.string.isRequired
}