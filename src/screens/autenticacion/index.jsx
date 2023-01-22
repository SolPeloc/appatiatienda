import React, {useState} from "react";
import { styles } from "./styles";
import { View,Text, KeyboardAvoidingView, TextInput, Button, TouchableOpacity,Image } from "react-native";
import {COLORES} from "../../constantes/temas"
import {esANDROID} from "../../utilidades/index"
import { useDispatch } from "react-redux";
import { registro, ingreso } from "../../store/acciones/";
const Autenticacion = ({navegacion}) => {
    const despachador = useDispatch()
    const [eslogueado,seteslogueado] =  useState(true)
    const [email,setemail] = useState("")
    const [contraseña,setcontraseña] = useState("")
    const titulo = eslogueado ? "Inicio Sesión" : "Registro"
    const mensaje = eslogueado ? "¿No tienes una cuenta?" : "¿Tienes una cuenta?"
    const mensajeBoton = eslogueado ? "Inicio Sesión" : "Registro"
    const enviar = () =>{
        despachador(eslogueado ? ingreso(email,contraseña) : registro(email, contraseña))
    }
    return (
        <KeyboardAvoidingView style={styles.keyboardContainer} behavior = {esANDROID ? "height" : "padding"} enabled> 
            <View style={styles.container}>
                <Image style={styles.imagen} source={require('../../../assets/imagenes/logoatia.png')}/>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su email"
                    placeholderTextColor={COLORES.fondo}
                    keyboardType = "email-address"
                    autoCapitalize="none"
                    autoCorrect = {false}
                    value = {email}
                    onChangeText = {(texto) => setemail(texto)}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                     style={styles.input}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor={COLORES.fondo}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect = {false}
                    value = {contraseña}
                    onChangeText = {(texto) => setcontraseña(texto)}
                />
                <Button
                    title={mensajeBoton}
                    color={COLORES.negro}
                    onPress = {enviar}
                    disabled = {!email || !contraseña}
                />
                <View style={styles.avisoContainer}> 
                    <TouchableOpacity onPress={() =>seteslogueado(!eslogueado)} style = {styles.avisoBoton}>
                        <Text style={styles.avisoMensaje}>{mensaje}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Autenticacion