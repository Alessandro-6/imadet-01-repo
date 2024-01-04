import { useState } from "react";
import Modal from "./Modal";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState("");
  const [inputValue, setInputValue] = useState("");
  const valid = inputValue.includes("@gmail.com");

  return (
    <>
      <section className="section-newsletter" id="newsletter">
        <form
          className="newsletter"
          onSubmit={(e) => {
            e.preventDefault();
            if (!inputValue) return;
            setIsOpen(true);
          }}
        >
          <h2 className="heading-2 mb-lg">Subscrever</h2>
          <input
            className={`newsletter__input ${
              inputValue && !valid ? "error" : ""
            }`}
            type="email"
            name="e-mail"
            placeholder="exemplo123@gmail.com"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" type="submit">
            Subscrever
          </button>
        </form>
      </section>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <h2>Você subscreveu-se com sucesso!</h2>
        </Modal>
      )}
    </>
  );
}
