import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";
const ItemCategorias = ({item, seleccionado}) =>{
    return  (
        <View style={styles.container}>
            <TouchableOpacity
                    style={ {...styles.contenidoContainer, backgroundColor: item.color}}
                    onPress={() => seleccionado(item)}>
                <View>
                    <Text style={styles.titulo}> {item.titulo}</Text>
                    <Image style={styles.imagen} source = {item.imagen}/>
                </View>
            </TouchableOpacity >
        </View>
    )
}

export default ItemCategorias