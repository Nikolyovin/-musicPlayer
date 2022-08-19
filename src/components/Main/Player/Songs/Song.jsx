import styles from "./Songs.module.css"

const Song = ({ name, band }) => {
    console.log(name, band)
    return <div className = { styles.songWrap }>
        <div className = { styles.songInfo }>
            <div className = { styles.cover}></div>
            <div className = { styles.text }>
                <span className = { styles.nameSong }> { name } </span>
                <span className = { styles.nameBand }> { band } </span>
            </div>
        </div>
        <div className = { styles.songOtherInfo } >
            <div className = { styles.like } > * </div>
            <div className = { styles.duration } > 2:20</div>
        </div>
    </div>
            
}
export default Song