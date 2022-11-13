import Layout from '../../components/layout'
import Styles from '../../styles/home.module.css'
import {mail, github} from '../../components/constants'


export default function Contact() {
    return (
        <Layout>
            <div className={Styles.center}>
                <p>e-mail : {mail}</p>
                <p>github : <a href={github}>{github}</a></p>
            </div>
        </Layout>
    )
}