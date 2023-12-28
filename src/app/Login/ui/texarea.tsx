import styles from './tesxarea.module.css'


export default function LoginPageForm({logintitle}) {
  return (
    <div class='flex'>
    <label className ={styles.label} htmlFor="idform">{`${logintitle} :`}</label>
    <input type="text" id='idform' className={styles.input}></input>
    </div>
  )
}