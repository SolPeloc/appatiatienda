import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORES } from "../constantes/temas";
import { esANDROID } from "../utilidades";
import {ListaFotos, Perfil, DetalleFotos} from "../screens"
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
                    <Ionicons  name='camera' size={20} />
                    </TouchableOpacity>
                  )
                  })} 
            /> 
            <Stack.Screen
              name="Perfil"
              component={Perfil}
              options={{ title: "Nueva Foto" }}
            />
          <Stack.Screen
            name="DetalleFotos"
            component={DetalleFotos}
            options={{ title: "Detalle de tu Outfit ATIA" }}
          />
      </Stack.Navigator>
    )
}
export default PerfilNavegacion