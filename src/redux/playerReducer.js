import music from "../assets/Music.json"

const SET_SONGS = "SET_SONGS"
const ADD_LIKE = "ADD_LIKE"


const requestMusic = music.music
const initialState = {
    music: []
}

const playerReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_SONGS:
            return { ...state.state, music: requestMusic }

        case ADD_LIKE:
            console.log('action:', action)
            console.log('state:', state)
            const res = state.music.filter(item => item.id === action.songId).map(item => {
                /* if (item.id === action.songId) */ return {...item, isLike:!item.isLike }
                 
            })
            console.log('res:', res)
            return { ...state.state,   }

        default: 
            return { state }
    }
}

export const setSongs = () => ({ type: SET_SONGS })
export const addLike = (songId) => ({ type: ADD_LIKE, songId })

export default playerReducer