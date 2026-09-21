import styles from "./Hero.module.css";

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
            Sua Experiência <span className={styles.highlight}> na Areia</span>{" "}
            em Matão
          </h1>

          <p className={styles.subtitle}>
            O ponto de encontro perfeito para quem busca esporte, lazer,
            gastronomia e ambiente premium em Matão. Quadras de alto padrão,
            aulas, eventos e experiências incríveis para toda a família.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="https://wa.me/5516997168587?text=Olá!%20Gostaria%20de%20reservar%20uma%20quadra%20ou%20saber%20mais%20sobre%20as%20aulas%20no%20CTBT."
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar Quadra
            </a>
            <a href="#planos" className={styles.btnOutline}>
              Ver Modalidades & Aulas
            </a>
          </div>

          <div className={styles.trustRow}>
            <span>Ambiente premium</span>
            <span>Quadras profissionais</span>
            <span>Experiência única</span>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>6</span>
              <span className={styles.statLabel}>Quadras</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>+1k</span>
              <span className={styles.statLabel}>Momentos</span>
            </div>
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
