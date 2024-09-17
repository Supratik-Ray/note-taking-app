import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
export default function Note({
  id,
  title,
  body,
  label,
  setNotesList,
  setCurrentNote,
  setModalActive,
  date,
  edited,
}) {
  let labelColor;
  if (label === "work") labelColor = "#3498db";
  if (label === "personal") labelColor = "#2ecc71";
  if (label === "study") labelColor = "#e67e22";

  const handleDeleteNote = function () {
    setNotesList((e) => {
      const n = e.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(n));
      return n;
    });
  };
  const handleEditNote = function () {
    setCurrentNote({ id, title, body, label, date });
    setModalActive((e) => !e);
  };
  return (
    <li className="note">
      <header className="note__header">
        <span
          className="note__label"
          style={{ backgroundColor: labelColor, color: "#fff" }}
        >
          {label}
        </span>
        <span className="note__edit-container">
          <FontAwesomeIcon
            icon={faPen}
            className="note__pen-icon"
            onClick={handleEditNote}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="note__trash-icon"
            onClick={handleDeleteNote}
          />
        </span>
      </header>
      <h2 className="note__title">
        {title.length > 18 ? title.slice(0, 18) + "..." : title}
      </h2>
      <p className="note__body">
        {body.length > 200 ? body.slice(0, 200) + "...." : body}
      </p>
      <p className="note__date">
        {date} {edited && "(edited)"}
      </p>
    </li>
  );
}
