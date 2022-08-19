import Song from "./Song"
import styles from "./Songs.module.css"

const Songs = ({ songs }) => {  
    console.log('songs', songs.length)
    return <> 
        {/* { songs.map(item => !console.log('item', item) && <Song key = { item.name } name = { item.name } band = { item.band } />) } */}

        { songs.map(item => {
            console.log('item', item)
           return <Song key = { item.name } name = { item.name } band = { item.band } />
        })}
    </>
    
}
export default Songs