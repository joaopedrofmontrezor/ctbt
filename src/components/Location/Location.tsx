"use client";
import { useState } from "react";
import styles from "./Location.module.css";

export default function Location() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso levar raquete e bolinha ou vocês alugam no local?",
      a: "Você não precisa ter material próprio! O CTBT conta com aluguel e empréstimo de raquetes profissionais e bolinhas de alta performance para que você possa jogar tranquilamente.",
    },
    {
      q: "Nunca joguei Beach Tennis antes. Posso agendar aula experimental?",
      a: "Com certeza! O Beach Tennis é um dos esportes mais fáceis e gostosos de aprender. Nossos professores são especialistas em ensinar desde os primeiros passos com metodologia rápida e acolhedora.",
    },
    {
      q: "Como funciona para reservar uma quadra avulsa?",
      a: "Basta clicar em qualquer botão de agendamento aqui no site para abrir uma conversa direta no nosso WhatsApp. Nossa equipe consulta os horários disponíveis em tempo real e já garante sua quadra.",
    },
    {
      q: "O Bar & Gastronomia é aberto para quem não vai jogar?",
      a: "Sim! Nosso Bar & Lounge é 100% aberto ao público de Matão e visitantes para curtir o fim de tarde, tomar chopp trincando, drinks especiais e provar nossas porções exclusivas.",
    },
    {
      q: "Vocês realizam eventos, aniversários e confraternizações de empresas?",
      a: "Sim! Temos estrutura completa para eventos fechados, confraternizações de fim de ano, aniversários e mini-torneios com bar, gastronomia e quadras dedicadas.",
    },
    {
      q: "Tem iluminação para jogar à noite? Quais os horários?",
      a: "Sim! Nossas 6 quadras contam com iluminação profissional de LED de alta potência sem sombras. Funcionamos de segunda a sexta até as 22h e finais de semana até as 19h.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                  Matão - SP, CEP 15990-000
                </p>
                <a
                  href="https://maps.google.com/?q=Av.+Antônio+Gorgatti,+1807+-+Imperador,+Matão+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    <strong>🎾 Arena & Quadras:</strong>
                    <br />
                    Segunda a Sexta: 09h às 22h
                    <br />
                    Sábados e Domingos: 07h às 19h
                  </div>
                  <div>
                    <strong>🍹 Bar & Gastronomia:</strong>
                    <br />
                    Aberto todos os dias no mesmo horário
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.icon}>📱</div>
              <div className={styles.infoText}>
                <h4>Atendimento & Redes</h4>
                <div className={styles.socials}>
                  <a
                    href="https://wa.me/5516997168587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappPill}
                  >
                    (16) 99716-8587
                  </a>
                  <a
                    href="https://instagram.com/ctbtoficial"
                    target="_blank"
                    rel="noopener noreferrer"
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
              title="Mapa de localização CTBT Matão"
              src="https://maps.google.com/maps?q=Av.+Antônio+Gorgatti,+1807+-+Imperador,+Matão+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={styles.faqWrap}>
          <div className={styles.header}>
            <span className={styles.tag}>DÚVIDAS FREQUENTES</span>
            <h3 className={styles.titleSmall}>Tudo O Que Você Precisa Saber</h3>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemActive : ""
                  }`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`${styles.faqChevron} ${
                        isOpen ? styles.faqChevronOpen : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.ctaPanel}>
          <div className={styles.ctaInfo}>
            <span className={styles.tag}>AGENDAMENTO RÁPIDO</span>
            <h3 className={styles.titleSmall}>
              Reserve sua quadra ou agende uma aula hoje mesmo
            </h3>
            <p className={styles.ctaSubtext}>
              Atendimento ágil pelo WhatsApp para você e sua turma não perderem
              tempo.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a
              href="https://wa.me/5516997168587?text=Olá!%20Gostaria%20de%20reservar%20uma%20quadra%20ou%20agendar%20uma%20aula%20no%20CTBT."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Av.+Antônio+Gorgatti,+1807+-+Imperador,+Matão+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryCta}
            >
              Ver no Mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
