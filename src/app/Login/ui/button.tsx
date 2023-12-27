import styles from './button.module.css'


export default function LoginPageButton({buttonname}) {
  return (
    <div className={styles.button}>{buttonname}</div>
  )
}