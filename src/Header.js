import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function Header({ setModalActive, children }) {
  const handleOpenModal = function () {
    setModalActive((e) => !e);
  };
  return (
    <header className="main-header">
      {children}
      <button className="addNoteBttn" onClick={handleOpenModal}>
        + &nbsp; Add
      </button>
      <div className="plus-container">
        <FontAwesomeIcon
          icon={faPlus}
          className="plus-icon"
          onClick={handleOpenModal}
        />
      </div>
    </header>
  );
}
