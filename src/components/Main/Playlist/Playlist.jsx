import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSongs } from "../../../redux/playerReducer"
import styles from "./Playlist.module.css"
import Songs from "./Songs/Songs"

const Playlist = ({ setAudioRef }) => {
    const dispatch = useDispatch()

    const isOpenList = useSelector(state => state.player.isOpenList)
    const songs = useSelector(state => state.player.music)

    useEffect(() => {
        dispatch(setSongs())
    }, [])

    {
        if (songs) return (
            <div className =  { isOpenList ? styles.playerWrap : styles.playerWrapNone }>
                <Songs songs = { songs } setAudioRef = { setAudioRef } />
            </div>        
        )
    }
}

export default Playlist