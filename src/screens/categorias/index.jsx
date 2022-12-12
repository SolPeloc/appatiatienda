import React from "react";
import { styles } from "./styles";
import { FlatList } from "react-native";
import{CATEGORIAS} from "../../constantes/data/index"
import { useSelector } from "react-redux";
import ItemCategorias from "../../componentes/itemcategorias";
import { SafeAreaView } from "react-native-safe-area-context";
const Categorias = ({navigation}) =>{
    const categorias = useSelector((state)=> state.categoria.categorias) 
    const seleccionado = (item) =>{
        navigation.navigate("Productos", {categoriaId:item.id,titulo: item.title,color: item.color } )
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