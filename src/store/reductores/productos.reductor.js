import { PRODUCTOS } from "../../constantes/data"
import { productosTipos } from "../tipos"
const {SELECCION_PRODUCTO,FILTRAR_PRODUCTOS} = productosTipos
const initialState = {
    productos : PRODUCTOS,
    productosFiltrados: [],
    productoSeleccionado: null
}

const productosReductor = (state = initialState,accion)=>{
    switch (accion.type){
        case SELECCION_PRODUCTO:
            return {
                ...state,
                productoSeleccionado: state.productos.find((producto) => producto.id === accion.productoId)
            }
        case FILTRAR_PRODUCTOS:
            return{
                ...state,
                productosFiltrados: state.productos.filter((producto) => producto.categoriaId === accion.categoriaId)
            } 
            default: return state  
    }
    
}
export default productosReductor