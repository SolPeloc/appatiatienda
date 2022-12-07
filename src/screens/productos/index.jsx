import React from "react";
import { styles } from "./styles";
import { View,Text, Button, FlatList } from "react-native";
import { COLORES } from "../../constantes/temas";
import{PRODUCTOS} from "../../constantes/data/index"
import ItemProductos from "../../componentes/itemproductos";
const Productos = ({navigation,route}) =>{
    const {categoriaId,color} = route.params
    const filtradoProductos = PRODUCTOS.filter(producto => producto.categoryId === categoriaId)
    const seleccionado = (item) =>{
        navigation.navigate("Producto",{ titulo: item.title, productoId: item.id})
    }
    const renderItem = ({item}) =>(<ItemProductos item={item} seleccionado={seleccionado} color={color}/>)
    return(
        
           <FlatList
           data={filtradoProductos}
           renderItem= {renderItem}
           keyExtractor={(item) => item.id.toString()}
           style={styles.container} 
           />
        
    )
}

export default Productos