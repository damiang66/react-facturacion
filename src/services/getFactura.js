import { factura } from "../data/factura"

export const getfactura = ()=>{
 /*   let total =0;
    factura.items.forEach(item=>{
        total = total +item.precio*item.cantidad
    });
    */
   // es lo mismo que arriba
   const total = calcularTotal(factura.items)
    return {...factura, total:total};
}
export const calcularTotal=(items=[])=>{
    return items
    .map(item=>item.precio *item.cantidad)
    .reduce((acumulador,valor)=> acumulador+ valor,0)
}