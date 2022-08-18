import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className = { styles.header }>
            <span className = { styles.title}>Музыка</span>
        </header>
    )
}

export default Header