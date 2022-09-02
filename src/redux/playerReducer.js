import music from "../assets/Music.json"

const SET_SONGS = "SET_SONGS"
const ADD_LIKE = "ADD_LIKE"
const PLAY_TRACK = "PLAY_TRACK"
const IS_OPEN_LIST = "IS_OPEN_LIST"
const NEXT_TRACK = "NEXT_TRACK"
const TOGGLE_PLAY_PAUSE = "TOGGLE_PLAY_PAUSE"

const requestMusic = music.music
const initialState = {
    music: [],
    activeTrack: {},
    isOpenList: false,
    isPlaying: false
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return { ...state, music: requestMusic }

        case ADD_LIKE:
            return {
                ...state, music: state.music.map(track => {
                    if (track.id === action.trackId) return { ...track, isLike: !track.isLike }
                    return track
                })
            }

        case PLAY_TRACK: {
            const activeTrack = state.music.find(track => track.id === action.trackId)
            return { ...state, activeTrack }
        }
            
        case IS_OPEN_LIST:
            return { ...state, isOpenList: !state.isOpenList }  

        case NEXT_TRACK: {
            console.log('action.trackId:', +action.trackId+1)
            const activeTrack = state.music.find(track => track.id === String(+action.trackId+1))
            return { ...state, activeTrack }
        }

        case TOGGLE_PLAY_PAUSE:
            return { ...state, isPlaying: !state.isPlaying }  

        default:
            return { state }
    }
}

export const setSongs = () => ({ type: SET_SONGS })
export const addLike = (trackId) => ({ type: ADD_LIKE, trackId })
export const playtrack = (trackId) => ({ type: PLAY_TRACK, trackId })
export const isOpenList = () => ({ type: IS_OPEN_LIST })
export const nextTrack = (trackId) => ({ type: NEXT_TRACK, trackId })
export const togglePlayPauseAC = () => ({ type: TOGGLE_PLAY_PAUSE })

export default playerReducer