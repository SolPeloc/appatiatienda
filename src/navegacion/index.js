import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {TiendaNavegacion} from "./tienda.js"

const AppNavigator = () =>{
    return(
        <NavigationContainer>
            <TiendaNavegacion/>
        </NavigationContainer>
    )
}

export default AppNavigator