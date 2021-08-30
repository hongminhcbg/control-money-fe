import { ListGroup } from 'react-bootstrap';
import '../../css/detail.css';
import done from "../../images/done_outline.svg";
function Transaction(props) {
  return (
    <div className="detail">
      <div className="image-detail">
        <img src={done} alt="done" />
      </div>
      <div className="content">
        <p className="content-title"> {props.tag} </p>
        <p className="content-detail"> {props.desc}</p>
      </div>
      <div className="content-money">
        <p className="content-title"> {'$ ' + props.money} </p>
      </div>
    </div>
  )
}

export default Transaction;