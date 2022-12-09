import React from "react";
import { styles } from "./styles";
import { View,Text, FlatList } from "react-native";
import ItemOrdenes from "../../componentes/itemordenes";
import { ORDENES } from "../../constantes/data";
const Ordenes = ({navigation}) =>{
    const renderItem = ({item}) =>(<ItemOrdenes item={item} borrar={borrar}/>)
    const borrar = (id) =>{
        console.warn("borrar",id)
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={ORDENES}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            /> 
        </View>
    )
}
export default Ordenes