import Delete from "./delete"
import Archive from "./archive";

function CardFooter({ id, onArchive, onDelete }) {
   return (
      <div className="card__footer">
         <Archive id={id} onArchive={onArchive} />
         <Delete id={id} onDelete={onDelete} />
      </div>
   );
}

export default CardFooter;