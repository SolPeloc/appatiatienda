import { StyleSheet } from "react-native";
import {COLORES} from "../../constantes/temas"
export const styles = StyleSheet.create({
  container:{
          flex:1,
          height:125,
          backgroundColor: COLORES.fondo,
          borderWidth:0.2,
          borderRadius:5,
          borderColor: COLORES.gris,
          paddingVertical:10,
          paddingHorizontal:20,
          shadowColor: COLORES.negro,
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1.41,
          
          elevation: 5,
          margin:10
    },
  titulo:{
      fontSize:18,
      fontFamily:"poppins-bold",
      color:COLORES.texto,
      marginBottom:5
  },
  contenidoContainer:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",
    alignItems:"center"
  },
  contenido:{
      flex:1,
  },
  cantidad:{
    fontSize:14,
    fontFamily:"poppins-regular",
    color: COLORES.texto,
    marginBottom:5
  },
  precio:{
    fontSize:14,
    fontFamily:"poppins-bold",
    color: COLORES.texto,
    marginVertical:10
  },        
})