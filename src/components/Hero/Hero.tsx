import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span> AREIA, ESPORTE E LAZER EM MATÃO
          </div>
          
          <h1 className={styles.title}>
            Sua Experiência <span className={styles.highlight}> na Areia</span> em Matão
          </h1>
          
          <p className={styles.subtitle}>
            O ponto de encontro perfeito que une esporte, o espaço gastronômico, bebidas geladas e os melhores torneios da cidade.
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="https://wa.me/5516997168587" className="btn-primary" target="_blank" rel="noreferrer">
              Reservar Quadra
            </a>
            <a href="#bar" className={styles.btnOutline}>
              Conhecer o Bar
            </a>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>6</span>
              <span className={styles.statLabel}>Quadras</span>
            </div>
            {/* <div className={styles.statItem}>
              <span className={styles.statNum}></span>
              <span className={styles.statLabel}>Esportes</span>
            </div> */}
            <div className={styles.statItem}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Vibe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
