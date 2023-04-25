import PropTypes from 'prop-types';
import { FilaItems } from "./FilaItems"

export const TablaItems = ({ titulo, items,handler})=>{
    return (<>
     <h3>{titulo}</h3>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>producto</th>
                                    <th>precio</th>
                                    <th>cantidad</th>
                                    <th>Eliminar</th>
                                </tr>

                            </thead>
                            <tbody>
                                {items.map(({ id, producto, precio, cantidad }) => {
                                    return (
                                       
                                        <FilaItems 
                                        id={id}
                                        key={id}
                                         producto={producto}
                                          precio={precio}
                                           cantidad={cantidad}
                                           handler={id=>{handler(id)}} />
                                    )
                                })}

                            </tbody>
                        </table>
    </>)
}
TablaItems.propTypes ={
   // titulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}