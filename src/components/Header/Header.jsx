import { Typography } from "@mui/material"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className = { styles.header }>
            <Typography component="div" variant="h4" color="#fafafa">
                Homemade Audio Player 
            </Typography>
        </header>
    )
}

export default Header