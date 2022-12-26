import { URL_BASE } from "../../constantes/firebase";
import { ordenesTipos } from "../tipos";

const {OBTENER_ORDEN,ELIMINAR_ORDEN} = ordenesTipos

export const obtenerOrdenes = () =>{
    return async  (despachador) =>{
        try{
                    const consulta = await fetch(`${URL_BASE}/ordenes.json`,{
                        method:"GET",
                        headers:{"content-type": "apliccation/json"}
                    })
                    const data = await consulta.json()
                    const ordenes = Object.keys(data).map((key) => ({
                        ...data[key],
                        id: key
                    }));
                despachador({
                        type: OBTENER_ORDEN,
                        ordenes
                    })
            } catch (error){
            console.log(error)
        }
    }
}

export const eliminarOrden = (id) =>{
        return async(despachador) => {
            try{
                const consulta = await fetch(`${URL_BASE}/ordenes/${id}.json`,{
                    method:"DELETE",
                    headers:{"content-type" : "application/json"}
                })
                const data = await consulta.json()
                despachador({
                    type: ELIMINAR_ORDEN,
                    id
                })
            }catch (error){
                console.log(error)
            }
        }
}