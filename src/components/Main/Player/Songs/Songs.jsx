import styles from "./Songs.module.css"

const Songs = () => {
    return (
        <div className = { styles.songWrap }>
            <div className = { styles.songInfo }>
                <div className = { styles.cover}></div>
                <div className = { styles.text }>
                    <span className = { styles.nameSong }> another song </span>
                    <span className = { styles.nameBand }> another band </span>
                </div>
            </div>
            <div className = { styles.songOtherInfo } >
                <div className = { styles.like } > * </div>
                <div className = { styles.duration } > 2:20</div>
            </div>
                
            
        </div>
    )
}

export default Songs