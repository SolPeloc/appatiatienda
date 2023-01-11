import { autenticacionTipos } from "../tipos"; 
const {REGISTRO,INGRESO} = autenticacionTipos

const estadoInicial = {
    token : null,
    usuarioId : null
}

const autenticacionReductor = (estado = estadoInicial,accion) => {
    switch(accion.type){
        case REGISTRO : 
        return {
            ...estado,
            token : accion.token,
            usuarioId : accion.usuarioId
        }
        case INGRESO :
            return{
                ...estado,
                token : accion.token,
                usuarioId : accion.usuarioId
            }
        default:
            return estado 
    }


    
}

export default autenticacionReductor