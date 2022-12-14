import { categoriaTipos } from "../tipos"
const {SELECCION_CATEGORIA} = categoriaTipos

export const selecCategoria = (id) =>({
    type:SELECCION_CATEGORIA,
    categoriaId: id,
})

