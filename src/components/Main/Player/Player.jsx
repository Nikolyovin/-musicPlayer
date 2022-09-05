import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSongs } from "../../../redux/playerReducer"
import styles from "./Player.module.css"
import Songs from "./Songs/Songs"

const Player = ({ setAudioRef }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSongs())
    }, [])

    const isOpenList = useSelector(state => state.player.isOpenList)
    const songs = useSelector(state => state.player.music) 
    
    {
        if (songs) return (
            <div className =  { isOpenList ? styles.playerWrap : styles.playerWrapNone }>
                <Songs songs = { songs } setAudioRef = { setAudioRef } />
            </div>        
        )
    }
}

export default Player