import { productosTipos } from "../tipos";
const {FILTRAR_PRODUCTOS, SELECCION_PRODUCTO} = productosTipos

export const selecProducto = (id) => ({
    type: SELECCION_PRODUCTO,
    productoId : id
})

export const filtrarProducto = (id) =>({
    type : FILTRAR_PRODUCTOS,
    categoriaId: id
})