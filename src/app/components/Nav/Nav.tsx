import styles from './Nav.module.css';

export default function Footer() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href='/'>홈</a>
        </li>
        <li>
          <a href='/a'>a</a>
        </li>
        <li>
          <a href='/b'>b</a>
        </li>
        <li>
          <a href='/c'>c</a>
        </li>
      </ul>
    </nav>
  );
}
