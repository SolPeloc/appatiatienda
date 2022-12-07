import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TiendaNavegacion from "./tienda";
import TabNavegacion from "./tabs";
const AppNavigator = () =>{
    
    return(
        <NavigationContainer>
            <TabNavegacion/>   
        </NavigationContainer>
    )
}

export default AppNavigator