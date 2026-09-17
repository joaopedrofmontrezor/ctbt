import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>CTBT</span>
              <span className={styles.logoSubtitle}></span>
            </div>
            <p className={styles.desc}>
              Seu complexo esportivo e gastronômico em Matão - SP. Aulas, locações de quadras e os melhores momentos.
            </p>
          </div>

          <div className={styles.navCol}>
            <h5>Navegação</h5>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#arena">A Arena & Esportes</a></li>
              <li><a href="#professores">Nossos Professores</a></li>
              <li><a href="#bar">Bar & Gastronomia</a></li>
              <li><a href="#localizacao">Localização</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h5>Contato</h5>
            <p>Av. Antônio Gorgatti, 1807 - Matão/SP</p>
            <p>Atendimento via WhatsApp</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} CTBT - Centro de Treinamento de Beach Tennis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
