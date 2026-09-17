import styles from './Arena.module.css';

export default function Arena() {
  return (
    <section className={styles.arenaSection} id="arena">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>CTBT BEACH TENNIS</span>
          <h2 className={styles.title}>A Arena & Esportes de Areia</h2>
          <p className={styles.subtitle}>
            Evolua no esporte, jogue com amigos e sinta a energia da areia de alta qualidade com infraestrutura completa.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoBox}>
            <div className={styles.sportItem}>
              <h3 className={styles.sportTitle}>Beach Tennis</h3>
              <p>O esporte que é a cara do verão! Reúna seus amigos para partidas dinâmicas e divertidas.</p>
              <ul className={styles.checklist}>
                <li>Aulas para todos os níveis</li>
                <li>Locação avulsa por hora</li>
                <li>Day Use para curtir o dia todo</li>
                <li>Torneios emocionantes</li>
              </ul>
            </div>
            
            <a href="https://wa.me/5516997168587" className="btn-primary" target="_blank" rel="noreferrer" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
              Reservar Quadra ou Aula
            </a>
          </div>

          <div className={styles.imageBox}>
            <img src="/images/arena.png" alt="Arena CTBT Beach Tennis" className={styles.image} />
            <div className={`glass-panel ${styles.overlayCard}`}>
              <strong>Aulas & Locação</strong>
              <span>Disponível todos os dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
