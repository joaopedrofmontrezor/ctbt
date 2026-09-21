import styles from "./Plans.module.css";

export default function Plans() {
  const plans = [
    {
      title: "Locação Avulsa",
      subtitle: "Para jogar com amigos quando quiser",
      badge: "Flexível",
      features: [
        "Reserva por hora de quadra",
        "Iluminação LED noturna inclusa",
        "Estrutura de vestiários e duchas",
        "Acesso livre ao Bar & Gastronomia",
        "Opção de aluguel de raquetes no local",
      ],
      ctaText: "Reservar Horário",
      whatsappMsg:
        "Olá! Gostaria de consultar horários disponíveis e valores para locação avulsa de quadra no CTBT.",
      popular: false,
    },
    {
      title: "Aulas de Beach Tennis",
      subtitle: "Evolução técnica rápida com professores",
      badge: "Mais Procurado",
      features: [
        "Aulas para iniciantes ao avançado",
        "Professores especializados e experientes",
        "Turmas reduzidas ou aula individual/VIP",
        "Metodologia focada em fundamentos e tática",
        "Aula experimental sem compromisso",
      ],
      ctaText: "Agendar Aula Experimental",
      whatsappMsg:
        "Olá! Gostaria de agendar uma aula experimental de Beach Tennis no CTBT.",
      popular: true,
    },
    {
      title: "Plano Mensalista",
      subtitle: "Seu horário garantido toda semana",
      badge: "Exclusivo",
      features: [
        "Dia e horário fixos na semana",
        "Prioridade em inscrições de torneios",
        "Condições especiais em eventos do clube",
        "Descontos exclusivos no bar e pro-shop",
        "Comunidade ativa para marcar jogos",
      ],
      ctaText: "Consultar Vagas Mensalistas",
      whatsappMsg:
        "Olá! Gostaria de saber mais sobre as vagas e planos para Mensalista no CTBT.",
      popular: false,
    },
    {
      title: "Eventos & Torneios",
      subtitle: "Aniversários, confraternizações e corporativo",
      badge: "Personalizado",
      features: [
        "Quadras exclusivas para o seu grupo",
        "Cardápio especial de porções e chopp",
        "Suporte para organização de mini-torneio",
        "Ambiente descontraído e seguro",
        "Estrutura completa com som e atendimento",
      ],
      ctaText: "Solicitar Orçamento",
      whatsappMsg:
        "Olá! Gostaria de um orçamento para realizar um evento/confraternização na arena CTBT.",
      popular: false,
    },
  ];

  return (
    <section className={styles.plansSection} id="planos">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>MODALIDADES & SERVIÇOS</span>
          <h2 className={styles.title}>Tudo O Que Você Precisa Na Areia</h2>
          <p className={styles.subtitle}>
            Desde partidas casuais entre amigos até treinamento profissional e
            eventos comemorativos. Escolha a sua experiência no CTBT.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                plan.popular ? styles.popularCard : ""
              }`}
            >
              {plan.badge && (
                <div
                  className={`${styles.badge} ${
                    plan.popular ? styles.popularBadge : ""
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.planSubtitle}>{plan.subtitle}</p>

              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5516997168587?text=${encodeURIComponent(
                  plan.whatsappMsg,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={plan.popular ? "btn-primary" : styles.btnSecondary}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.corporateBanner}>
          <div className={styles.corporateText}>
            <h4>Tem uma empresa ou grupo grande?</h4>
            <p>
              Oferecemos pacotes customizados para empresas de Matão e região
              promoverem qualidade de vida, saúde e confraternização entre
              colaboradores.
            </p>
          </div>
          <a
            href="https://wa.me/5516997168587?text=Olá!%20Gostaria%20de%20informações%20sobre%20parcerias%20corporativas%20com%20o%20CTBT."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar com a Diretoria
          </a>
        </div>
      </div>
    </section>
  );
}
