import { combineReducers, createStore } from "redux"
import playerReducer from "./playerReducer"

const reducers = combineReducers({
    player: playerReducer
})

export const store = createStore(reducers)