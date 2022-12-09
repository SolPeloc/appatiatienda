import { StyleSheet } from "react-native";
import {COLORES} from"../../constantes/temas"
export const styles = StyleSheet.create({
    container:{
        flex:1,
        height:100,
        backgroundColor: COLORES.blanco,
        borderWidth:0.3,
        borderRadius:5,
        borderColor: COLORES.gris,
        paddingVertical:10,
        paddingHorizontal:20,
        shadowColor: COLORES.gris,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.41,
        
        elevation: 5,
        margin:10
    },
    cabeceraContainer:{
        
    },
fecha:{
   fontSize:14,
   fontFamily:"poppins-italic"
},
contenidoContainer:{
  flex:1,
  flexDirection:"row",
  flexWrap:"wrap",
  justifyContent:"space-between",
  alignItems:"center",
 
},
contenido:{
  
},
total:{
    fontSize:14,
    fontFamily:"poppins-bold",
    color: COLORES.texto,
    marginVertical:10
}
})