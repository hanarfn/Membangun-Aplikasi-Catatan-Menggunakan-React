import Card from "./card";

function List({ notes, query, onArchive, onDelete, isArchived = false }) {
   const notesList = notes.filter((note) => (isArchived) ? note.archived === true : note.archived === false)
   return (
      <div className="notes-list">
         {
            notesList.length < 1
            ? <p className="notes-list__empty-message">Tidak ada catatan {(isArchived) ? "yang diarsipkan" : ""}</p>
            : notesList
               .filter((note) => note.title.toLowerCase().includes(query.toLowerCase()))
               .map((note) => (
                  <Card
                     key={note.id}
                     onArchive={onArchive}
                     onDelete={onDelete}
                     {...note}
                  />
               ))
               .reverse()
         }
      </div>
   );
}

export default List;