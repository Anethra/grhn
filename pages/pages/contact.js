import Layout, {mail, github} from '../../components/layout'
import Styles from '../../styles/home.module.css'


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