import { Drawer } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSongs } from "../../../redux/playerReducer"
import Songs from "./Songs/Songs"
import { styled, useTheme } from "@mui/material/styles"

const Playlist = ({ setAudioRef }) => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const drawerWidth = 50

    const isOpenList = useSelector(state => state.player.isOpenList)
    const songs = useSelector(state => state.player.music)

    useEffect(() => {
        dispatch(setSongs())
    }, [])

    {
        if (songs) return (
            
            <Drawer
                sx={{
                width: drawerWidth,
                zIndex: 5,
                flexDirection:"column",
                // padding: "64px 0 130px 0",
                '& .MuiDrawer-paper': {
                    backgroundColor: "#2196f3",
                    justifyContent: "center",
                    
                },
                }}
                variant="persistent"
                anchor="right"
                open={isOpenList}
            >
                <Songs songs = { songs } setAudioRef = { setAudioRef } />
            </Drawer>   
        )
    }
}

export default Playlist