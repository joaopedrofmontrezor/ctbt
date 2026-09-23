import Image from "next/image";
import styles from "./Arena.module.css";

export default function Arena() {
  return (
    <section className={styles.arenaSection} id="arena">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>CTBT</span>
          <h2 className={styles.title}>A Arena & Esporte de Areia</h2>
          <p className={styles.subtitle}>
            Evolua no esporte, jogue com amigos e sinta a energia da areia de
            alta qualidade com infraestrutura completa.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoBox}>
            <div className={styles.sportItem}>
              <h3 className={styles.sportTitle}>Beach Tennis</h3>
              <p>
                O esporte que é a cara do verão! Reúna seus amigos para partidas
                dinâmicas, desafiadoras e cheias de energia.
              </p>
              <ul className={styles.checklist}>
                <li>Aulas para todos os níveis</li>
                <li>Locação avulsa por hora</li>
                <li>Day use para curtir o dia todo</li>
                <li>Torneios emocionantes</li>
              </ul>
            </div>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <strong>Ambiente premium</strong>
                <span>Infraestrutura pensada para praticidade e conforto.</span>
              </div>
              <div className={styles.featureItem}>
                <strong>Treino para todos</strong>
                <span>
                  Do iniciante ao jogador que quer evoluir com mais técnica.
                </span>
              </div>
              <div className={styles.featureItem}>
                <strong>Experiência social</strong>
                <span>
                  O lugar ideal para reunir amigos, família e eventos.
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/5516997168587"
              className={`btn-primary ${styles.reserveBtn}`}
              target="_blank"
              rel="noreferrer"
            >
              Reservar Quadra ou Aula
            </a>
          </div>

          <div className={styles.imageBox}>
            <Image
              src="/images/arena.png"
              alt="Arena CTBT em Matão"
              className={styles.image}
              width={800}
              height={550}
            />
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
