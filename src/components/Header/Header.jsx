import { AppBar, createTheme, Toolbar, Typography } from "@mui/material"
import styles from "./Header.module.css"

const Header = () => {

    return (
        
        <AppBar position="sticky">
            <Toolbar sx = {{ justifyContent:"center" }}>
                <Typography component="div" variant="h4" >
                    Homemade Audio Player 
                </Typography>
            </Toolbar>
        </AppBar> 
    )
}

export default Header