import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriaReductor,productosReductor, carritoReductor, ordenReductor, autenticacionReductor, perfilReductor} from "./reductores";
import thunk from "redux-thunk";

const RaizReductor = combineReducers({
    categoria : categoriaReductor,
    productos : productosReductor,
    carrito : carritoReductor,
    ordenes : ordenReductor,
    autenticacion : autenticacionReductor,
    perfil : perfilReductor,
    
})

export default createStore(RaizReductor, applyMiddleware(thunk))