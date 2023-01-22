function Archive({ id, onArchive }) {
    return (
       <button className="btn note-item__archive-button btn--icon" title="Archive" onClick={() => onArchive(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
             <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
       </button>
    );
 }
 
 export default Archive;