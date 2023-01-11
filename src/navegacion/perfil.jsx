import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Perfil} from "../screens";
import { COLORES } from "../constantes/temas";
import { esANDROID } from "../utilidades";
const Stack = createNativeStackNavigator()

const PerfilNavegacion = () =>{
    return(
        <Stack.Navigator
        initialRouteName="Perfil"
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
            name="Perfil"
            component={Perfil}
           /> 


        </Stack.Navigator>
    )
}
export default PerfilNavegacion