import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORES.fondo
    },
    titulo:{
        fontSize:20,
        fontFamily: "poppins-bold",
        color: COLORES.texto
    },
    imagen:{
        flex:0.5,
        height:250,
        width:250
    }
})