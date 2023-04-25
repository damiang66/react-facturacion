import PropTypes from 'prop-types';
export const DetalleCompañia = ({ compañia }) => {
    const { nombre: nombreCompañia, cuit } = compañia;
    return (<>
        <h3>Datos de la compañia</h3>
        <ul className="list-group">
            <li className="list-group-item active">{nombreCompañia}</li>
            <li className="list-group-item">{cuit}</li>
        </ul>
    </>)
}
DetalleCompañia.propTypes={
    compañia: PropTypes.object.isRequired,
}