import React, { useState } from "react";
import { styles } from "./styles";
import * as  ImagePicker from "expo-image-picker"
import { View,Text, Alert, Button, Image, TouchableNativeFeedback} from "react-native";
import { COLORES } from "../../constantes/temas";

const Fotos = ({imagenSeleccion}) => {

    const tomarFoto = async () =>{
        const isCameraPermissions = await verifyPermissions()
        if (!isCameraPermissions) return
        const imagen = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.7,
            
        })
       
        seturlSeleccionada(imagen.assets[0].uri)
       imagenSeleccion(imagen.assets[0].uri) 
      
    } 
    const verifyPermissions = async() =>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if (status != "granted"){
            Alert.alert(
                "permisos insuficientes",
                "Necesitas dar permisos para usar la camara", [{text: "ok"}]
            )
            return false
        }
       return true
    }
    const [urlSeleccionada,seturlSeleccionada] = useState(null)
     return ( 
        <View style={styles.container}>
             <Button
            title="Tomate una foto!"
            color={COLORES.gris}
            onPress={tomarFoto}
            />
            <View style={styles.previa}>
                    {!urlSeleccionada ? (
                        <Text style={styles.titulo}> foto</Text>
                    ) : (
                        <Image style={styles.imagen} source={{uri : urlSeleccionada  }}/>
                    )}
                </View>
           
        </View>
     )
}
export default Fotos