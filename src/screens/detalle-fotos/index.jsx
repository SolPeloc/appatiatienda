import React from "react";
import { styles } from "./styles";
import { View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";


const DetalleFotos = ({navigation,route}) =>{
    const {fotoId} = route.params
    const fotos = useSelector((estado=> estado.perfil.lista.find((lista) => lista.id === fotoId)))
    return(
        <ScrollView style = {styles.container}>
              <Image source={{uri:fotos.imagen }} style={styles.imagen}/>
              <Text style = {styles.titulo}>{fotos.titulo}</Text>
        </ScrollView>
    )
}

export default DetalleFotos