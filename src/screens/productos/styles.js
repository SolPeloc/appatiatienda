import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORES.fondo
    },
    titulo:{
        fontSize:20,
        fontFamily: "poppins-bold",
        color:COLORES.texto
    }
})