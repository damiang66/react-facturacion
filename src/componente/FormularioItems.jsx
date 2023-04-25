import { useEffect, useState } from "react";

export const FormularioItems = ({ handler }) => {
    const [facturaItems, setFacturaItem] = useState({
        producto: '',
        precio: '',
        cantidad: '',
    });
    const { producto, precio, cantidad } = facturaItems;
    useEffect(() => {
        //console.log('el precio cambio');
    }, [precio])
    useEffect(() => {
        // console.log('cambio todos los items');
    }, [facturaItems])
    const onFacturaItemsChange = ({ target: { name, value } }) => {
        setFacturaItem({
            ...facturaItems,
            [name]: value
        })
    }
    const OnFormulario = (event) => {
        event.preventDefault();
        if (producto.trim().length <= 1) return;
        if (precio.trim().length <= 1) return;
        if (isNaN(cantidad.trim())) return;
        if (isNaN(precio.trim())) return;
        if (cantidad.trim().length < 1) return;


        handler(facturaItems);

        setFacturaItem({
            producto: '',
            cantidad: '',
            precio: '',

        })


    }
    return (<>
        <form className="w-50" onSubmit={OnFormulario}>
            <input type="text" name="producto" id="" placeholder="Producto" value={producto}
                className="form-control m-2"
                onChange={event => onFacturaItemsChange(event)} />
            <input type="text" name="precio" id="" placeholder="precio" value={precio}
                className="form-control m-2" onChange={event => onFacturaItemsChange(event)} />
            <input type="text" name="cantidad" id="" placeholder="cantidad" value={cantidad}
                //simplificado el evento onChange
                className="form-control m-2" onChange={onFacturaItemsChange} />
            <button type="submit" className="btn btn-dark m-2">Agregar items</button>
        </form>
    </>)
}