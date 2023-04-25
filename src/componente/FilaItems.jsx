import PropTypes from 'prop-types';
export const FilaItems = ({producto,precio,cantidad,handler,id}) => {
    return (
        <>
            <tr>
                <td>{producto}</td>
                <td>{precio}</td>
                <td>{cantidad}</td>
                <td><button onClick={()=> handler(id)} className='btn btn-danger '>Eliminar</button></td>
            </tr>
        </>
    )
}
FilaItems.propTypes={
    producto: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    cantidad:PropTypes.number.isRequired,
}