import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSongs } from "../../../redux/playerReducer"
import styles from "./Player.module.css"
import Songs from "./Songs/Songs"

const Player = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSongs())
    }, [])

    const songs = useSelector((state) => state.player.music) 

    {
        if (songs) return (
            <div className = { styles.playerWrap}>
            <Songs songs = {songs} />
            </div>
    )}
}

export default Player