import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("fotos.db")

export const init = () =>{
    const promesa = new Promise((resolve,reject) =>{
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS fotos(id INTEGER PRIMARY KEY NOT NULL, titulo TEXT NOT NULL, imagen TEXT NOT NULL); ",
                [],
                () =>resolve(),
                (_, err) => reject(err)
            )
        })
    })
    return promesa
}

export const insertarFoto = (titulo,imagen) => {
    const promesa = new Promise((resolve,reject)=>{
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO fotos(titulo,imagen) VALUES(?,?)",
            [titulo,imagen],
            (_, result) => resolve(result),
            (_, err) => reject(err)
            )
        })
    })
    return promesa
}

export const obtenerFotos = () => {
    const promesa = new Promise((resolve, reject) =>{
        db.transaction((tx) => {
        tx.executeSql("SELECT * FROM fotos",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
        )
        })
    })
    return promesa
}