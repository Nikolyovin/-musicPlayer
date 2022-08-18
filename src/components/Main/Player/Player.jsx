import styles from "./Player.module.css"
import Songs from "./Songs/Songs"

const Player = () => {
    return (
        <div className = { styles.playerWrap}>
           <Songs/>
        </div>
    )
}

export default Player