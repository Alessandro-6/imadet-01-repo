import { useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Modal from "./Modal";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <h2 className="heading-2 mb-md">Contactos</h2>
          <div className="brands mb-sm">
            <IconContext.Provider value={{ className: "brand" }}>
              <FaFacebook />
              <FaInstagram />
              <FaWhatsapp />
              <FaTwitter />
            </IconContext.Provider>
          </div>

          <a href className="email">
            Imadet007@gmail.com
          </a>
        </Modal>
      )}
      <footer className="footer">
        <a href className="footer__logo">
          <img src="images/logo.svg" alt="Logo" className="logo" />
          <img src="images/brand-dark.svg" alt="brand" className="brand" />
        </a>
        <span className="copyright">
          &copy; 2023-2030 Todos os direitos reservados
        </span>
        <a
          href
          className="contacts"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        >
          Contactos
        </a>
      </footer>
    </>
  );
}
