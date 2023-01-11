import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavegacion from "./tabs";
import AutenticacionNavegacion from "./autenticacion"
import { useSelector } from "react-redux";
const AppNavigator = () =>{
const usuarioId = useSelector((estado) => estado.autenticacion.usuarioId)
    return(
        <NavigationContainer>
            {usuarioId ?  <TabNavegacion/> : <AutenticacionNavegacion/> }
            
        </NavigationContainer>
    )
}

export default AppNavigator