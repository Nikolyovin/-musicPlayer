import music from "../assets/Music.json"

const SET_SONGS = "SET_SONGS"
const ADD_LIKE = "ADD_LIKE"
const PLAY_TRACK = "PLAY_TRACK"
const IS_OPEN_LIST = "IS_OPEN_LIST"

const requestMusic = music.music
const initialState = {
    music: [],
    activeTrack: {},
    isOpenList: false
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return { ...state, music: requestMusic }

        case ADD_LIKE:
            return {
                ...state, music: state.music.map(song => {
                    if (song.id === action.songId) return { ...song, isLike: !song.isLike }
                    return song
                })
            }

        case PLAY_TRACK:
            const activeTrack = state.music.find(song => song.id === action.songId)
            return { ...state, activeTrack }
            

        case IS_OPEN_LIST:
            console.log(state)
            return { ...state, isOpenList: !state.isOpenList }  

        default:
            return { state }
    }
}

export const setSongs = () => ({ type: SET_SONGS })
export const addLike = (songId) => ({ type: ADD_LIKE, songId })
export const playtrack = (songId) => ({ type: PLAY_TRACK, songId })
export const isOpenList = () => ({ type: IS_OPEN_LIST })

export default playerReducer