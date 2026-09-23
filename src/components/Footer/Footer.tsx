import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoText}>
              <Image
                src="/images/logo.png"
                alt="Logo CTBT"
                width={48}
                height={48}
                className={styles.logoImage}
              />
              <div>
                <span className={styles.logoTitle}>CTBT</span>
                {/* <span className={styles.logoSubtitle}></span> */}
              </div>
            </div>
            <p className={styles.desc}>
              Seu complexo esportivo e gastronômico em Matão - SP. Aulas,
              locações de quadras e os melhores momentos.
            </p>
          </div>

          <div className={styles.navCol}>
            <h5>Navegação</h5>
            <ul>
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#arena">A Arena & Esportes</a>
              </li>
              <li>
                <a href="#planos">Planos & Aulas</a>
              </li>
              <li>
                <a href="#professores">Nossos Professores</a>
              </li>
              <li>
                <a href="#bar">Bar & Gastronomia</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
              <li>
                <a href="#localizacao">Localização</a>
              </li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h5>Contato</h5>
            <p>Av. Antônio Gorgatti, 1807 - Matão/SP</p>
            <p>
              <a
                href="https://wa.me/5516997168587"
                target="_blank"
                rel="noreferrer"
              >
                Atendimento via WhatsApp
              </a>
            </p>
            <p>
              <a
                href="https://instagram.com/ctbtoficial"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} CTBT - Centro de Treinamento de
            Beach Tennis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
