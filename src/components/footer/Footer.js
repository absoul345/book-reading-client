import React, { useState } from "react";
import Modal from "../modal/Modal";
import TeamModal from "../teamModal/TeamModal";
import FooterStyled from "./FooterStyled";
import footerBookIcon from "./footerBookIcon.svg";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <FooterStyled>
      <div className="FooterWrapper">
        <p className="FooterText">
          <svg className="FooterIcon" width="18" height="18">
            <use href={footerBookIcon + "#footerBookIcon"}></use>
          </svg>
          <b> Books Reading </b>© 2021 | Усі права захищені | Розроблено
          {/* © 2021 | All Rights Reserved | Developed by */}
          <button type="button" class="FooterButton" onClick={toggleModal}>
            Студентами GoIT
            {/* GoIT Students ⌨ (<b>BootCamp 8</b>) */}
          </button>
          {/* onClick={toggleModal} */}
          {showModal && (
            <Modal onClose={toggleModal}>
              <TeamModal onClose={toggleModal} />
            </Modal>
          )}
        </p>
      </div>
    </FooterStyled>
  );
}
