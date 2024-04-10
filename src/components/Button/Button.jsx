import React, { useState } from "react";
import { BtnModal } from "./BtnModal";

const Button = () => {
  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  return (
    <div className="btn">
      <button className="btn__component" onClick={() => setModalInfoOpen(true)}>
        Связаться с учителем
      </button>
      <BtnModal
        isOpen={modalInfoIsOpen}
        onClose={() => setModalInfoOpen(false)}
      >
        <div className="btn__inp">
          <h2>Оставить заявку</h2>
          <h4>Введите имя</h4>
          <input type="text" placeholder="Введите имя" />
          <h4>Введите E-mail</h4>
          <input type="text" placeholder="mail@mail.ru" />
          <h4>Введите номер телефона</h4>
          <input type="text" placeholder="xxx-xxx-xxx" />
          <button className="btn__component">Отправить</button>
          <p>
            Нажимая на кнопку, Вы принимаете <a href="#">Положение</a> и{" "}
            <a href="#">Согласие</a> на обработку первональный данных.
          </p>
        </div>
      </BtnModal>
    </div>
  );
};

export default Button;
