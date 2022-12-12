import { createStore, combineReducers } from "redux";
import { categoriaReductor,productosReductor } from "./reductores";

const RaizReductor = combineReducers({
    categoria : categoriaReductor,
    productos : productosReductor,
})

export default createStore(RaizReductor)