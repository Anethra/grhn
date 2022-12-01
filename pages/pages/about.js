import Layout from '../../components/layout'
import Styles from '../../styles/home.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <Layout>
            
            <div className={Styles.center}>
                <Image
                    priority
                    src="/images/profile.jpg"
                    height={144}
                    width={144}
                    alt="grhn"
                />
                <p>Hello, I am Gurhan Ozturk. I am born at 1993. Currently working as a Laptop motherboard repair technician. Also I am in the process of learning coding.</p>
            </div>
        </Layout>
    )
}