import styles from './button.module.css'


export default function LoginPageButton({buttonname}) {
  return (
    <button className={styles.button}>{buttonname}</button>
  )
}