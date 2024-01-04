import { FaRegHeart, FaShare } from "react-icons/fa";

const tools = [
  {
    name: "Betoneira ",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--1.jpg",
    price: "4539kz",
    id: "image 1",
  },
  {
    name: "Compactador de solo ",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--2.jpg",
    price: "6749kz",
    id: "image 2",
  },
  {
    name: "Rebarbadora ",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--3.jpg",
    price: "8979kz",
    id: "image 3",
  },
  {
    name: "Britadeira",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--4.jpg",
    price: "5499kz",
    id: "image 4",
  },
  {
    name: "Motosserra",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--5.jpg",
    price: "5499kz",
    id: "image 5",
  },

  {
    name: "Furadeira",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--6.jpg",
    price: "5499kz",
    id: "image 6",
  },
  {
    name: "Motobomba",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--7.jpg",
    price: "5499kz",
    id: "image 7",
  },
  {
    name: "Andaime",
    content: "Lorem ipsum dolor sit",
    image: "images/card__image--8.jpg",
    price: "5499kz",
    id: "image 8",
  },
];

export default function Products() {
  return (
    <section className="section-products">
      <header className="products-header mb-xl">
        <h2 className="heading-2 mb-sm">Nossos Produtos</h2>
        <p className="paragraph">A solução para os problemas da sua obra</p>
      </header>
      <Cards />
    </section>
  );
}

function Cards() {
  return (
    <div className="cards">
      {tools.map((tool) => (
        <Card
          name={tool.name}
          content={tool.content}
          image={tool.image}
          id={tool.image}
          price={tool.price}
          key={tool.id}
        />
      ))}
    </div>
  );
}

function Card({ name, content, id, image, price }) {
  return (
    <div className="card">
      <div className="card-top">
        <button className="btn btn-cart mb-sm">Adicionar ao carrinho</button>
        <div className="icon-group">
          <a className="icon-group__link">
            <FaShare className="icon-group__link--share" />
            <span>partilhar</span>
          </a>
          <a className="icon-group__link">
            <FaRegHeart className="icon-group__link--like" />
            <span>gosto</span>
          </a>
        </div>
      </div>
      <div className="card-bottom">
        <img src={image} alt={id} className="card-bottom__img" />
        <div className="card-bottom__body">
          <h2 className="card-bottom__header">{name}</h2>
          <div className="card-bottom__content">
            <span className="products-description">{content}</span>
          </div>
          <h3 className="products-price">{price}</h3>
        </div>
      </div>
    </div>
  );
}
