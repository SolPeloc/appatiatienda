import { View, Text, FlatList } from "react-native";
import {useSelector, useDispatch}  from "react-redux"
import ItemFotos from "../../componentes/itemfotos";
import { styles } from "./styles";
import * as setFoto from "../../store/acciones/perfil.accion"
import { useEffect } from "react";

const ListaFotos = ({ navigation }) => {
    const despachador = useDispatch()
    const fotos = useSelector((estado=> estado.perfil.lista))
    useEffect(() => {
      despachador(setFoto.cargarFotos())
    }, []);
      console.log("foto", fotos) 
      const renderItem = ({item}) => <ItemFotos {...item} seleccionado = {() =>navigation.navigate("DetalleFotos",{fotoId: item.id})}/>
      return (
        <View style={styles.container}>  
            <Text style={styles.titulo}>Tus outfit con  ATIA</Text>
            <FlatList
              data={fotos}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
        </View>
      );
};

export default ListaFotos;
