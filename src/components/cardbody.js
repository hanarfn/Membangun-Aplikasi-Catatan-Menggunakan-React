import { showFormattedDate } from '../utils/index';

function CardBody({ title, body, createdAt }) {
   return (
      <div>
         <h3 className="note-item__title">{ title }</h3>
         <span className="note-item__date">{ showFormattedDate(createdAt) }</span>
         <p className="note-item__body">{ body }</p>
      </div>
   );
}

export default CardBody;