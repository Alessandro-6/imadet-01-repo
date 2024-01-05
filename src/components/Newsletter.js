import { useState } from "react";
import Modal from "./Modal";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState("");
  const [inputValue, setInputValue] = useState("");
  const valid = inputValue.includes("@gmail.com");

  return (
    <>
      <section className="section-newsletter" id="newsletter">
        <h2 className="heading-2 mb-md">Entre em contacto</h2>
        <form
          className="newsletter"
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputValue) return;
            setIsOpen(true);
          }}
        >
          <div className="newsletter__input-group">
            <label className="newsletter__label">Nome</label>
            <input
              className={`newsletter__input ${
                inputValue && !valid ? "error" : ""
              }`}
              type="text"
              name="name"
              placeholder="exemplo"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="newsletter__input-group">
            <label className="newsletter__label">E-mail</label>
            <input
              className={`newsletter__input ${
                inputValue && !valid ? "error" : ""
              }`}
              value={inputValue}
              type="email"
              name="e-mail"
              placeholder="exemplo123@gmail.com"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="newsletter__input-group">
            <label className="newsletter__label">Assunto</label>
            <input
              className={`newsletter__input ${
                inputValue && !valid ? "error" : ""
              }`}
              type="text"
              name="subject"
              placeholder="opcional"
            />
          </div>
          <div className="newsletter__input-group">
            <label className="newsletter__label">Mensagem</label>
            <textarea
              className="newsletter__input"
              placeholder="eu gostaria de perguntar sobre"
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Subscrever
          </button>
        </form>
        <aside className="side-content">
          <div className="side-content__group side-content__group--1">
            <FaLocationDot className="side-content__group--icon" />
            <div className="side-content__group--content">
              <h3 className="heading-3">Endereço</h3>
              <p className="paragraph">lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="side-content__group side-content__group--2">
            <FaPhoneAlt className="side-content__group--icon" />
            <div className="side-content__group--content">
              <h3 className="heading-3">Telefone</h3>
              <p className="paragraph">lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="side-content__group side-content__group--3">
            <MdWatchLater className="side-content__group--icon" />
            <div className="side-content__group--content">
              <h3 className="heading-3">Aberto</h3>
              <p className="paragraph">lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </aside>
      </section>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <h2>Você subscreveu-se com sucesso!</h2>
        </Modal>
      )}
    </>
  );
}
