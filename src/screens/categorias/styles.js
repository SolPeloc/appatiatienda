import { StyleSheet } from "react-native";
import { COLORES} from "../../constantes/temas";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORES.fondo
    },
    titulo:{
        fontFamily:"poppins-bold",
        fontSize:20,
        color:COLORES.texto
    },
    listaContenedor:{
        flex:1
    }
})