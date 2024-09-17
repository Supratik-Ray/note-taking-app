import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
export default function Modal({
  setModalActive,
  modalActive,
  setNotesList,
  currentNote,
  setCurrentNote,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [label, setLabel] = useState("personal");

  useEffect(() => {
    if (!currentNote) return;
    setTitle(currentNote.title);
    setBody(currentNote.body);
    setLabel(currentNote.label);
  }, [currentNote]);

  const clearModal = function () {
    setTitle("");
    setBody("");
    setLabel("personal");
  };
  const handleCloseModal = function () {
    setModalActive((e) => !e);
    clearModal();
    setCurrentNote(null);
  };

  const handleAddNote = function (e) {
    if (!title || !body) return;
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;
    const newNote = { title, body, label, id: Date.now(), date: formattedDate };
    setNotesList((e) => {
      const n = [...e, newNote];
      localStorage.setItem("notes", JSON.stringify(n));
      return n;
    });
    clearModal();
    setModalActive((e) => !e);
  };

  const handleSaveNote = function () {
    setNotesList((e) => {
      const n = e.map((note) =>
        note.id === currentNote.id
          ? { id: note.id, title, body, label, edited: true, date: note.date }
          : note
      );
      localStorage.setItem("notes", JSON.stringify(n));
      return n;
    });
    setModalActive((e) => !e);
    clearModal();
    setCurrentNote(null);
  };
  return (
    <div className={`modal ${modalActive ? "show" : ""}`}>
      <div className="modal__x-bttn-container">
        <FontAwesomeIcon
          icon={faXmark}
          className="modal__x-icon"
          onClick={handleCloseModal}
        />
      </div>

      <input
        type="text"
        className="modal__title"
        placeholder="Title..."
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="modal__body"
        placeholder="Write your note here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <select
        className="modal__label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      >
        <option value="personal">Personal</option>
        <option value="study">Study</option>
        <option value="work">Work</option>
      </select>

      <div className="modal__add-bttn-container">
        {currentNote ? (
          <button className="modal__add-bttn" onClick={handleSaveNote}>
            Save
          </button>
        ) : (
          <button className="modal__add-bttn" onClick={handleAddNote}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}
