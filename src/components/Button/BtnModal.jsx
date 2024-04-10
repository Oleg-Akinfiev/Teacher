import React from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as Close } from "../Images/close.svg";

export const BtnModal = ({ isOpen, onClose, children }) => {
  // Закрытие окна при клике мимо
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };

  // Закрытие окна на иконку
  const closeButton = (event) => {
    if (event.target.classList.contains("modal-close-button")) onClose();
  };
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
              <div className="modal-content">
                <button
                  className="modal-close-button"
                  onClick={() => onClose(closeButton)}
                >
                  <Close />
                </button>
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
