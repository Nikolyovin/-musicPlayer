import { createStore } from "redux"
import playerReducer from "./playerReducer"

const reducers = {
    player: playerReducer
}

const store = createStore(reducers)