import styles from "./Teachers.module.css";
import Image from "next/image";

export default function Teachers() {
  const teachers = [
    {
      name: "Hugo Rossato",
      description:
        "Especialista em táticas avançadas",
      image: "images/hugo.png",
    },
    {
      name: "Eduardo Mortari",
      description:
        "Foco no desenvolvimento técnico e fundamentos essenciais do esporte.",
      image: "images/eduardo.png",
    },
    {
      name: "Arthur Tercini",
      description:
        "Didática excelente para quem está dando os primeiros passos na areia.",
      image: "images/arthur.png",
    },
  ];

  const testimonials = [
    {
      quote:
        "Ambiente incrível, quadras muito boas e um atendimento que faz você querer voltar sempre.",
      author: "Cliente CTBT",
    },
    {
      quote:
        "O melhor lugar para treinar e curtir o dia com amigos. A vibe é excelente e o espaço é muito bem cuidado.",
      author: "Atleta local",
    },
    {
      quote:
        "Além do esporte, o bar e a gastronomia fazem o lugar se destacar. Uma experiência completa.",
      author: "Visitante frequente",
    },
  ];

  return (
    <section className={styles.teachersSection} id="professores">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>NOSSA EQUIPE</span>
          <h2 className={styles.title}>Conheça Nossos Professores</h2>
          <p className={styles.subtitle}>
            Aprenda e evolua no Beach Tennis com profissionais capacitados que
            respiram o esporte.
          </p>
        </div>

        <div className={styles.grid}>
          {teachers.map((teacher, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.avatar}>
                <img src={teacher.image} alt={teacher.name} />
              </div>
              <h3 className={styles.name}>{teacher.name}</h3>
              <span className={styles.role}>Professor</span>
              <p className={styles.desc}>{teacher.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.testimonials} id="depoimentos">
          <div className={styles.headerSmall}>
            <span className={styles.tag}>DEPOIMENTOS</span>
            <h3 className={styles.titleSmall}>
              Quem já passou por aqui aprova
            </h3>
          </div>

          <div className={styles.reviewGrid}>
            {testimonials.map((item, index) => (
              <blockquote key={index} className={styles.reviewCard}>
                <p>“{item.quote}”</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
