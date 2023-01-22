import React, {useEffect}from "react";
import { styles } from "./styles";
import { FlatList } from "react-native";
import ItemProductos from "../../componentes/itemproductos";
import { useDispatch, useSelector } from "react-redux";
import { filtrarProducto,selecProducto } from "../../store/acciones/productos.accion";

const Productos = ({navigation}) =>{
    const categoria = useSelector((state) => state.categoria.categoriaseleccionada)
    const productosFiltrados = useSelector((state) => state.productos.productosFiltrados)
    const despacho = useDispatch()
    useEffect(() => {
        despacho(filtrarProducto(categoria.id))
        
    },[]);
    
    const seleccionado = (item) =>{
        despacho(selecProducto(item.id))
        navigation.navigate("Producto",{ titulo: item.title})
    }
    const renderItem = ({item}) =>(<ItemProductos item={item} seleccionado={seleccionado} color={categoria.color}/>)
    return(  
        <FlatList
            data={productosFiltrados}
            renderItem= {renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.container} 
        />     
    )
}

export default Productos