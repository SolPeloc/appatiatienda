import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriaReductor,productosReductor, carritoReductor, ordenReductor, autenticacionReductor} from "./reductores";
import thunk from "redux-thunk";

const RaizReductor = combineReducers({
    categoria : categoriaReductor,
    productos : productosReductor,
    carrito : carritoReductor,
    ordenes : ordenReductor,
    autenticacion : autenticacionReductor
})

export default createStore(RaizReductor, applyMiddleware(thunk))