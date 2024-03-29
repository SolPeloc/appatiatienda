import React from "react";
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ItemFotos = ({id,titulo,imagen, seleccionado}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={seleccionado}>
            <Text style={styles.ide}>{id}</Text>
            <Image style={styles.imagen} source={{uri:imagen}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
        </TouchableOpacity>   
    )
}
export default ItemFotos