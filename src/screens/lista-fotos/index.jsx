import { View, Text, FlatList } from "react-native";
import {useSelector}  from "react-redux"
import ItemFotos from "../../componentes/itemfotos";
import { styles } from "./styles";

const ListaFotos = ({ navigation }) => {
 
  const fotos = useSelector((estado=> estado.perfil.lista))
 
  console.log("foto", fotos) 
  const renderItem = ({item}) => <ItemFotos {...item}/>

  
  return (
    <View style={styles.container}>  
     <Text style={styles.titulo}>Tus outfit con  ATIA</Text>
     <FlatList
      style={styles.contenido}
      data={fotos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      />
  </View>
  );
};

export default ListaFotos;
