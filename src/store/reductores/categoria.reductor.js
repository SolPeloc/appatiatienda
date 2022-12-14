import { CATEGORIAS } from "../../constantes/data"
import { categoriaTipos } from "../tipos"
const {SELECCION_CATEGORIA} = categoriaTipos

const initialState = {
    categorias:CATEGORIAS,
    categoriaseleccionada: null
}

const categoriaReductor = (state = initialState, accion) =>{
    switch (accion.type){
        case SELECCION_CATEGORIA :
            const indiceCategoria = state.categorias.findIndex((categoria) => categoria.id === accion.categoriaId)
            if (indiceCategoria === -1) return state
            return {
                    ...state,
                    categoriaseleccionada: state.categorias[indiceCategoria]
            }
            default: return state

    }
    
}
export default categoriaReductor