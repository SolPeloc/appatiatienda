import { View, Text, FlatList } from "react-native";
import {useSelector}  from "react-redux"
import { styles } from "./styles";

const ListaFotos = ({ navigation }) => {
 
  const fotos = useSelector((estado=> estado.perfil.lista))
 
  console.log("foto", fotos) 
  return (
    <View style={styles.container}>  
     <Text>tu outfit ATIA</Text>
     <FlatList
      style={styles.contenido}
      data={fotos}
      />
  </View>
  );
};

export default ListaFotos;
