import { BtnReadMore } from "./App";

export default function About() {
  return (
    <section className="section-about">
      <ContentBox title={"visão"} num={1}>
        Ser considerada a melhor empresa de aluguel de ferramentas e de
        equipamentos para construção civil em Angola.
      </ContentBox>

      <ContentBox title={"Missão"} num={2}>
        Promover soluções para o aluguel de ferramentas e equipamentos
        relacionados para construção civil com eficiência e qualidade.
      </ContentBox>
    </section>
  );
}

function ContentBox({ title, num, children }) {
  return (
    <div className="about mb-lg">
      <div className="about__content">
        <h1 className="heading-1 mb-md">{title}</h1>
        <p className="paragraph">{children}</p>
        <BtnReadMore />
      </div>
      <img
        className={`about__img about__img--${num}`}
        src={`images/image-${num}.jpg`}
        alt={`img ${num}`}
      />
    </div>
  );
}
