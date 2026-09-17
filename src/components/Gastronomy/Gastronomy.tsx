import styles from './Gastronomy.module.css';

export default function Gastronomy() {
  return (
    <section className={styles.barSection} id="bar">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>CTBT BAR</span>
          <h2 className={styles.title}>Gastronomia & Bar</h2>
          <p className={styles.subtitle}>
            Após o treino ou para curtir o dia com estilo. Drinks refrescantes, cerveja trincando e porções artesanais.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageBox}>
            <img src="/images/bar.png" alt="Bar e Gastronomia CTBT" className={styles.image} />
            <div className={`glass-panel-dark ${styles.overlayCard}`}>
              <strong>Drinks Tropicais</strong>
              <span>Experimente a verdadeira coquetelaria</span>
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.icon}>🍹</div>
              <h4>Drinks Autorais</h4>
              <p>Coquetelaria artesanal com frutas selecionadas e caipirinhas exclusivas.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.icon}>🍻</div>
              <h4>Cerveja Trincando</h4>
              <p>Rótulos de cerveja bem gelados para matar a sede do calor de Matão.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.icon}>🍔</div>
              <h4>Porções Gourmet</h4>
              <p>Cardápio variado de porções gourmet, iscas, batata frita e muito mais.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.icon}>🌴</div>
              <h4>Lounge Pé na Areia</h4>
              <p>Mesas e lounges com sombreiros e o clima descontraído da praia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
