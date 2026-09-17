import styles from './Teachers.module.css';

export default function Teachers() {
  const teachers = [
    {
      name: 'Hugo Rossato',
      // role: 'Head Coach',
      description: 'Especialista em táticas avançadas e torneios profissionais de Beach Tennis.',
      emoji: '👨🏽‍🏫'
    },
    {
      name: 'Eduardo Mortari',
      // role: 'Professora Intermediário',
      description: 'Foco no desenvolvimento técnico e fundamentos essenciais do esporte.',
      emoji: '👨🏽‍🏫'
    },
    {
      name: 'Arthur Tercini',
      // role: 'Professor Iniciante',
      description: 'Didática excelente para quem está dando os primeiros passos na areia.',
      emoji: '👨🏻‍🏫'
    }
  ];

  return (
    <section className={styles.teachersSection} id="professores">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>NOSSA EQUIPE</span>
          <h2 className={styles.title}>Conheça Nossos Professores</h2>
          <p className={styles.subtitle}>
            Aprenda e evolua no Beach Tennis com profissionais capacitados que respiram o esporte.
          </p>
        </div>

        <div className={styles.grid}>
          {teachers.map((teacher, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.avatar}>{teacher.emoji}</div>
              <h3 className={styles.name}>{teacher.name}</h3>
              {/* <span className={styles.role}>{teacher.role}</span> */}
              <p className={styles.desc}>{teacher.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
