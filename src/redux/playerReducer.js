import music from "../assets/Music.json"

const SET_SONGS = "SET_SONGS"
const ADD_LIKE = "ADD_LIKE"


const requestMusic = music.music
const initialState = {
    music: []
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return { ...state.state, music: requestMusic }

        case ADD_LIKE:
            return {
                ...state, music: state.music.map(song => {
                    if (song.id === action.songId) return { ...song, isLike: !song.isLike }
                    return song
                })
            }

        default:
            return { state }
    }
}

export const setSongs = () => ({ type: SET_SONGS })
export const addLike = (songId) => ({ type: ADD_LIKE, songId })

export default playerReducer