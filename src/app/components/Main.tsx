import styles from '../styles/Main.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <section>
        <article>
          <img src='/product1.jpg' alt='상품 1' />
          <h2>상품 1</h2>
          <p>상품 설명</p>
          <p>가격: ₩20,000</p>
        </article>
        <article>
          <img src='/product2.jpg' alt='상품 2' />
          <h2>상품 2</h2>
          <p>상품 설명</p>
          <p>가격: ₩30,000</p>
        </article>
        {/* 추가 상품 */}
      </section>
    </main>
  );
}
