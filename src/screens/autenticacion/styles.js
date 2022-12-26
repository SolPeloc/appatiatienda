import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";

export const styles = StyleSheet.create({
    container : {
       width: "80%",
       maxWidth : 400,
       padding : 15,
       margin : 15,
       borderColor : COLORES.fondoClaro,
       borderWidth : 1,
       borderRadius : 10,   
    },
    keyboardContainer : {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    titulo : {
        fontSize : 18,
        fontFamily : "poppins-bold",
        marginVertical : 5,
        textAlign : "center"
    },
    label : {
        fontSize: 14,
        fontFamily: "poppins-regular",
        marginVertical : 5

    },
    input : {
        height : 45,
        borderBottomColor: COLORES.fondo,
        borderBottomWidth: 1,
        width :"90%",
        fontFamily : "poppins-regular",
        marginBottom : 10
    },
    avisoContainer : {
        width:"100%",
        flexDirection: "row",
        justifyContent : "space-around"
    },
    avisoBoton : {
      width:"100%",
      backgroundColor: COLORES.fondoClaro,
      borderColor : COLORES.primario,
      borderWidth: 1,
      padding: 10,
      borderRadius : 5,
      marginTop: 10,
      justifyContent:"center",
      alignItems:"center"

    },
    avisoMensaje: {
        fontSize:14,
        fontFamily: "poppins-regular",
        color: COLORES.texto,
       
        

}
})