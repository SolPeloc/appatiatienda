import React from "react";
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ItemFotos = ({titulo,imagen, seleccionado}) =>{
    return(
        <TouchableOpacity onPress={seleccionado}>
            <Image style={styles.imagen} source={{uri:imagen}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ItemFotos