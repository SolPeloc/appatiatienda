import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";

export const styles = StyleSheet.create({
    container :{
        flex: 1,
       marginBottom:20
       
    },
    previa:{
        width:"80%",
        height:300,
        marginBottom: 20,
        marginRight:100,
        marginLeft:50,
        justifyContent:"center",
        alignItems:"center",
        borderColor:COLORES.gris,
        borderWidth: 1
    },
    titulo:{
        fontFamily: "poppins-regular",
        fontSize:16
    },
    imagen:{
        width:"100%",
        height:"100%"
    },

})