import React from "react";
import { styles } from "./styles";
import { FlatList } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import ItemCategorias from "../../componentes/itemcategorias";
import { SafeAreaView } from "react-native-safe-area-context";
import { selecCategoria } from "../../store/acciones/";

const Categorias = ({navigation}) =>{
    const despachador = useDispatch()
    const categorias = useSelector((state)=> state.categoria.categorias) 
    const seleccionado = (item) =>{
        despachador(selecCategoria(item.id))
        navigation.navigate("Productos", {titulo: item.title})
    }
    const renderItem = ({item}) =>(<ItemCategorias item={item} seleccionado={seleccionado}/>)
    return(
        <SafeAreaView style={styles.container}> 
            <FlatList
                data={categorias}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.listaContenedor}
            />
        </SafeAreaView>
    )
}

export default Categorias