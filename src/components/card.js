import CardBody from "./cardbody"
import CardFooter from "./cardfooter";

function Card({ id, title, body, createdAt, onArchive, onDelete }) {
   return (
      <div className="card">
         <CardBody title={title} createdAt={createdAt} body={body} />
         <CardFooter id={id} onArchive={onArchive} onDelete={onDelete} />
      </div>
   );
}

export default Card;