import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORES } from "../constantes/temas";
import { esANDROID } from "../utilidades";
import {ListaFotos, Perfil} from "../screens"
import { TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons"
const Stack = createNativeStackNavigator()

const PerfilNavegacion = () =>{
    return(
        <Stack.Navigator
        initialRouteName="ListaFotos"
        screenOptions={{
            headerStyle: {
                backgroundColor: esANDROID? COLORES.fondoClaro : COLORES.gris
            },
            headerTintColor: COLORES.texto,
            headerTitleStyle: {
                fontFamily: "poppins-bold"
            },
            presentation: "card",
            headerBackTitle:""
        }}
        >
          <Stack.Screen
            name="ListaFotos"
            component={ListaFotos} options={ ({navigation}) =>({
                title: "Fotos",
                headerRight:() =>(
                  <TouchableOpacity 
                  onPress={()=> navigation.navigate("Perfil")}>
                  <Ionicons name = "add-circle-outline" size = {25} color = {COLORES.negro}/>
                  </TouchableOpacity>
                 )
                })} 
           /> 
           <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{ title: "Nueva Foto" }}
      />


        </Stack.Navigator>
    )
}
export default PerfilNavegacion