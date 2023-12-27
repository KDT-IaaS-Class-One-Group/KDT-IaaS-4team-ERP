import styles from './Nav.module.css';

export default function Footer() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href='/'>홈</a>
        </li>
        <li>
          <a href='/products'>상품 목록</a>
        </li>
        <li>
          <a href='/about'>회사 소개</a>
        </li>
        <li>
          <a href='/contact'>연락처</a>
        </li>
        <li>
          <a href='/cart'>장바구니</a>
        </li>
      </ul>
    </nav>
  );
}
