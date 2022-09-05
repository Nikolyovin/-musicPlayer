import { combineReducers, createStore } from "redux"
import playerReducer from "./playerReducer"

const reducers = combineReducers({
    player: playerReducer,
    /* visualizer: visualizerReducer */
})

export const store = createStore(reducers)