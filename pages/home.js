import Navbar from "./components/navbar"
import CustomHead from './components/head'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (<>
        <CustomHead pageName="Home" />
        <div className={styles.container}>
            <Navbar />
            <div className={styles.main_greet}>
                <h1>Hello,<br />I&apos;m <span className={styles.name}>nxrmqlly.</span></h1>
                <p1>I&apos;m a hobbyist programmer {"&"}<br />Discord Freak</p1>
            </div>
        </div>
    </>)
}

export default Home