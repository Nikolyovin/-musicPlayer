import music from "../assets/Music.json"

const SET_SONGS = "SET_SONGS"
/* const requestMusic = JSON.parse(music)
console.log('requestMusic:', requestMusic) */
const requestMusic = music.music
const initialState = {
    music: [],
    isTest: false
}

const playerReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_SONGS:
            return { ...state.state, music: requestMusic }

        default: 
            return { state }
    }
}

export const setSongs = () => ({ type: SET_SONGS })

export default playerReducer