import styles from '../styles/component/footer.module.css'

const Footer = ({content}) => {
  return (
    <footer className={styles.footerContainer}>
        <p className={styles.stylesfooterContent}>{content}</p>
    </footer>
  )
}

export default Footer

