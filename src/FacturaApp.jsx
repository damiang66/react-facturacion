
import { getfactura, calcularTotal } from "./services/getFactura"
import { DetalleFactura } from "./componente/detalleFactura";
import { DetalleCliente } from './componente/DetalleCliente';
import { DetalleCompañia } from "./componente/DetalleCompañia";
import { TablaItems } from "./componente/TablaItems";
import { Total } from "./componente/total";
import { useEffect, useState } from "react";
import { FormularioItems } from "./componente/FormularioItems";

const facturaInicial =
{
    id: 0,
    nombre: '',
    cliente: {
        id: 0,
        nombre: '',
        apellido: '',
        direccion: {
            pais: '',
            provincia: '',
            calle: '',
            numero: 0

        },
    },
    compañia: {
        nombre: '',
        cuit: ''
    },
    items: [

    ]
}



export const FacturaApp = () => {
    const [activarForm, setActivarForm] = useState(false);
    const [factura, setFactura] = useState(facturaInicial);
    const [total, setTotal] = useState(0);
    const { id, nombre, cliente, compañia } = factura;

    const onActivarForm = () => {
        setActivarForm(!activarForm);
    }



    const [items, setItems] = useState([])
    const [contador, setContador] = useState(4);
    useEffect(() => {
        const data = getfactura();
        setFactura(data);
        setItems(data.items)
    }, []);

    useEffect(() => {
        // console.log('el contador cambio');
    }, [contador])
    useEffect(() => {
        setTotal(calcularTotal(items))
    }, [items])
    //  const factura = getfactura();


    /*
    const [productoValue,setProductoValue]= useState('');
    const [precioValue,setPrecioValue]= useState('');
    const [cantidadValue,setCantidadValue]= useState('');
    */



    // const { producto, precio, cantidad } = items

    /*
    const onProductoChange = ({target})=>{
        
            setProductoValue(target.value)
        
    }
    const onCantidadChange =({target})=>{
        
            setCantidadValue(target.value)
        
    }
    const onPrecioChange = ({target})=>{
        setPrecioValue(target.value)

    }
    */
    const handlerAddFacturaItems = ({ producto, precio, cantidad }) => {



        setItems([...items,
             { id: contador,
                 producto: producto.trim(),
                  precio: +precio.trim(), 
                  cantidad: +cantidad.trim() }])

        setContador(contador + 1);
    }
 const handlerDeleteItems=(id)=>{
    setItems(items.filter(i=>i.id!== id ))

 }

    return (
        <>
            <div className="container">
                <div className="card my-3" >
                    <div className="card-header">
                        Ejemplo de Factura
                    </div>

                    <div className="card-body">
                        <div className="row">
                            <DetalleFactura id={id} nombre={nombre} />
                            <div className="col">

                                <DetalleCliente cliente={cliente} />
                            </div>
                            <div className="col">
                                <DetalleCompañia compañia={compañia} />
                            </div>

                        </div>
                        <TablaItems titulo={"productos de la factura"} items={items} handler={handlerDeleteItems}/>
                        <Total total={total} />
                        <button onClick={onActivarForm} className="btn btn-secondary">
                            {!activarForm ? 'Agregar lista' : 'Ocultar'}
                        </button>
                        {!activarForm ? '' : <FormularioItems handler={(newItem) => handlerAddFacturaItems(newItem)} />}



                    </div>
                </div>
            </div>
        </>
    )
}