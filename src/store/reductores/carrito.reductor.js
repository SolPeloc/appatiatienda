import { carritoTipos } from "../tipos";
const {AÑADIR_AL_CARRITO,REMOVER_DE_CARRITO, CONFIRMAR_ORDEN} = carritoTipos
import { sumaTotal } from "../../utilidades";

const estadoInicial = {
    items : [],
    total: 0,
    error: null
}

const carritoReductor = (estado = estadoInicial, accion) =>{
    switch (accion.type){
        case AÑADIR_AL_CARRITO:
            let actualizarCarrito = []
            if(estado.items.find(item => item.id === accion.item.id)){
                actualizarCarrito = estado.items.map((item) => {
                    if(item.id === accion.item.id) item.cantidad += 1
                    return item
                })
            }else{
                const item = {...accion.item, cantidad : 1}
                actualizarCarrito = [...estado.items, item]
            }
            return {
                ...estado,
                items : actualizarCarrito,
                total :  sumaTotal(actualizarCarrito)
            }
            case REMOVER_DE_CARRITO:
                const carritoFiltrado = estado.items.filter((item) => item.id != accion.id)
                return {
                    ...estado,
                    items : carritoFiltrado,
                    total : sumaTotal(carritoFiltrado)
                }
                case CONFIRMAR_ORDEN:
                    if(accion.resultado){
                        return{
                            ...estado,
                            items:[],
                            total: 0
                        }
                    }
                    return{
                        ...estado,
                        error: accion.error
                    }
            default:
                return estado
    } 
}

export default carritoReductor