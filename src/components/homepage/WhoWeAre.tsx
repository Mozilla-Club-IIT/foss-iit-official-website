import styles from '../../scss/Home/WhoWeAre.module.scss'
import WhoWeAreImg from "../../assets/images/whoWeAre.png"

const WhoWeAre = () => {
    return (
        <div id="WhoWeAre" className={styles.container}>
            <h1 className={styles.header}>Who We Are</h1>
            <div className={styles.details}>
                <div className={styles.paragraphs}>
                    <p className={styles.text}>FOSS (Free and Open-Source Software) community of IIT was initiated in our university in November 2020 to promote the use and development of free and open-source software.</p>

                    <p>Although the FOSS community is new to IIT, we have already conducted programs to advance the club's progress and collaborated for events with the FOSS communities of reputed universities to advocate and is responsible for.</p>

                    <p>The Mozilla Campus Club of Informatics Institute of Technology (IIT) has been in a society with a long-standing reputation for hosting sessions and events that encourage students to contribute to keeping resources and information on the Internet public and accessible to all. </p>
                </div>
                <img className={styles.whoWeAreImg} src={WhoWeAreImg}></img>
            </div>

        </div>
    )
}

export default WhoWeAre
