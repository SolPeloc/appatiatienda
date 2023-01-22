import React from "react";
import { View,Text, TextInput, Button, ScrollView,Image} from "react-native";
import { COLORES } from "../../constantes/temas";
import {Fotos} from "../../componentes/index";
import { styles } from "./styles";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { guardarFoto } from "../../store/acciones/perfil.accion";

const Perfil= ({navigation}) =>{
      const [titulo, settitulo] = useState("");
      const [imagen, setimagen] = useState(null)  
      const despachador = useDispatch()
      const enviar = () =>{
        despachador(guardarFoto({titulo,imagen})) 
      navigation.navigate("ListaFotos") 
    }
  const cambio = (text) =>{
    settitulo(text)   
  }
  const imagenSeleccion = (uri) =>{
    setimagen(uri)
  }
    return(
              <View style={styles.container}>
                  <Text style={styles.titulo}>Nueva foto</Text>
                      <ScrollView style={styles.containerInput}>
                          <TextInput placeholder="Ponele nombre a tu Outfit" style={styles.input} onChangeText={cambio}/>
                              <Fotos imagenSeleccion={imagenSeleccion}/>
                                <Button
                                    color={COLORES.gris}
                                    title= "Guardar foto"
                                    onPress={enviar}
                                />
                      </ScrollView>    
              </View>
      )
}
export default Perfil