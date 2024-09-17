import Note from "./Note";
export default function Notes({
  notesList,
  query,
  setNotesList,
  setCurrentNote,
  setModalActive,
}) {
  const q = query.toLowerCase();
  const filteredList = notesList.filter(
    (note) =>
      note.title.toLowerCase().includes(q) ||
      note.body.toLowerCase().includes(q)
  );
  if (!filteredList.length)
    return <p className="empty-mssg">No notes found!</p>;
  return (
    <ul className="notes">
      {filteredList.map((note) => (
        <Note
          title={note.title}
          body={note.body}
          label={note.label}
          key={note.id}
          id={note.id}
          date={note.date}
          edited={note.edited}
          setNotesList={setNotesList}
          setCurrentNote={setCurrentNote}
          setModalActive={setModalActive}
        />
      ))}
    </ul>
  );
}
