import React from "react";
import { View,Text, TextInput, Button, ScrollView } from "react-native";
import { COLORES } from "../../constantes/temas";
import {Fotos} from "../../componentes/index";
import { styles } from "./styles";
import { useState } from "react";
const Perfil= ({navigation}) =>{
    const [titulo, settitulo] = useState("");
    const [imagen, setimagen] = useState(null)
    const cambio = (text) =>{
        settitulo(text)   
  }
  const enviar = () =>{
   // dispatch(guardarImagen({titulo,imagen})) saveplace
   // navigation.navigate("perfil") places
}
const imagenSeleccion = (uri) =>{
  setimagen(uri)
}

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Tus fotos!</Text>
            <ScrollView style={styles.containerInput}>
                <TextInput
                placeholder="ponle nombre a tu foto"
                style={styles.input}
                onChangeText={cambio}
                />
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