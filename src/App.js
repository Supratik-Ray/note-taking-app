import { useState } from "react";
import Main from "./Main.js";
import Header from "./Header.js";
import Modal from "./Modal.js";
import Overlay from "./Overlay.js";
import SearchBar from "./SearchBar";
import "./index.css";
import Notes from "./Notes.js";
export default function App() {
  const [notesList, setNotesList] = useState(
    JSON.parse(localStorage.getItem("notes")) || [
      {
        id: 1,
        label: "personal",
        title: "Welcome",
        body: `hey! welcome  to my note taking app. Here you can:\n\n1)create Notes\n2)Edit Notes\n3)Delete Notes\n4)search Notes`,
        edited: false,
        date: `15 September 2024`,
      },
      {
        id: 2,
        label: "study",
        title: "Different labels",
        body: "you can use these labels to denote the type of note:\n\n1)personal\n2)work\n3)study",
        edited: true,
        date: `16 September 2024`,
      },
    ]
  );

  const [modalActive, setModalActive] = useState(false);
  const [query, setQuery] = useState("");
  const [currentNote, setCurrentNote] = useState(null);

  return (
    <>
      {modalActive && <Overlay />}
      <Modal
        setModalActive={setModalActive}
        modalActive={modalActive}
        setNotesList={setNotesList}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <Header setModalActive={setModalActive}>
        {<SearchBar query={query} setQuery={setQuery} />}
      </Header>
      <Main>
        {
          <Notes
            notesList={notesList}
            query={query}
            setNotesList={setNotesList}
            setCurrentNote={setCurrentNote}
            setModalActive={setModalActive}
          />
        }
      </Main>
    </>
  );
}
