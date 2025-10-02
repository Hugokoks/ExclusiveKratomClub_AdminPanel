import styles from './index.module.css'



export default function Logo() {
    return (

        <div className={`${styles.logo}`}>
            <img src="/logo.png" alt="EKC Logo" />
            <h1>EKC Admin </h1>
        </div>


    )
}