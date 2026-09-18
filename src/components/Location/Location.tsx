import styles from "./Location.module.css";

export default function Location() {
  return (
    <section className={styles.locationSection} id="localizacao">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>VENHA NOS VISITAR</span>
          <h2 className={styles.title}>Localização & Horários</h2>
          <p className={styles.subtitle}>
            Estamos situados em uma localização privilegiada e de fácil acesso
            em Matão - SP.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <div className={styles.infoBlock}>
              <div className={styles.icon}>📍</div>
              <div className={styles.infoText}>
                <h4>Endereço Completo</h4>
                <p>
                  Av. Antônio Gorgatti, 1807 - Imperador
                  <br />
                  Matão - SP
                </p>
                <a
                  href="https://maps.google.com/?q=Av.+Antônio+Gorgatti,+1807+-+Imperador,+Matão+-+SP"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Abrir no Google Maps →
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.icon}>⏰</div>
              <div className={styles.infoText}>
                <h4>Horários de Funcionamento</h4>
                <div className={styles.hours}>
                  <div>
                    <strong>🎾 Arena / Quadras:</strong>
                    <br />
                    Seg a Sex: 09h às 22h
                    <br />
                    Sáb e Dom: 07h às 19h
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.icon}>📱</div>
              <div className={styles.infoText}>
                <h4>Redes Sociais</h4>
                <div className={styles.socials}>
                  <a
                    href="https://instagram.com/ctbtoficial"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialBtn}
                  >
                    @ctbtoficial
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mapCard}>
            <iframe
              title="Mapa CTBT"
              src="https://maps.google.com/maps?q=Av.+Antônio+Gorgatti,+1807+-+Imperador,+Matão+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={styles.faqWrap}>
          <div className={styles.header}>
            <span className={styles.tag}>DÚVIDAS FREQUENTES</span>
            <h3 className={styles.titleSmall}>Tudo o que você precisa saber</h3>
          </div>

          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <strong>Preciso saber jogar para reservar uma quadra?</strong>
              <p>
                Não. A CTBT recebe pessoas de todos os níveis, do iniciante ao
                jogador mais experiente.
              </p>
            </div>
            <div className={styles.faqItem}>
              <strong>Vocês oferecem aulas?</strong>
              <p>
                Sim. Aulas com orientação técnica para quem quer evoluir e
                aproveitar melhor a prática.
              </p>
            </div>
            <div className={styles.faqItem}>
              <strong>Há espaço para curtir com amigos?</strong>
              <p>
                Sim. O ambiente também é pensado para lazer, socialização e
                momentos com a família ou grupo.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaPanel}>
          <div>
            <span className={styles.tag}>AGENDAMENTO RÁPIDO</span>
            <h3 className={styles.titleSmall}>
              Reserve sua quadra ou agende uma aula hoje mesmo
            </h3>
          </div>

          <div className={styles.ctaActions}>
            <a
              href="https://wa.me/5516997168587"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Av.+Antônio+Gorgatti,+1807+-+Imperador,+Matão+-+SP"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryCta}
            >
              Ver localização
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
