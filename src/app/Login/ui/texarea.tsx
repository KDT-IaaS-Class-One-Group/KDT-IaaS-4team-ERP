import styles from './tesxarea.module.css'


export default function LoginPageForm({logintitle}) {
  return (
    <>
    <label htmlFor="idform">{`${logintitle} :`}</label>
    <input type="text" id='idform' className={styles.input}></input>
    </>
  )
}