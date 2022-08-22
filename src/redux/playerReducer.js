import music from "../assets/Music.json"

const SET_SONGS = "SET_SONGS"
const ADD_LIKE = "ADD_LIKE"
const PLAY_TRACK = "PLAY_TRACK"

const requestMusic = music.music
const initialState = {
    music: [],
    activeTrack: {}
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

        case PLAY_TRACK:
            const activeTrack = state.music.find(song => song.id === action.songId)
            return {
                ...state, activeTrack
            }

        default:
            return { state }
    }
}

export const setSongs = () => ({ type: SET_SONGS })
export const addLike = (songId) => ({ type: ADD_LIKE, songId })
export const playtrack = (songId) => ({ type: PLAY_TRACK, songId })

export default playerReducer