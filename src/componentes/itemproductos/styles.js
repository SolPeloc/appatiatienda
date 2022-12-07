import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:10,
        backgroundColor: COLORES.blanco,
        height:120
    },
    item:{
        flex:1,
        justifyContent:"space-around",

    },
titulo:{
   fontSize:16,
   fontFamily:"poppins-italic"
},
detalleContainer:{
  flexDirection:"row",
  justifyContent:"space-between"
},

precio:{
    fontFamily:"poppins-bold",
    fontSize:18,
},
weight:{

},

})