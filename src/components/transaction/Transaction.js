import {ListGroup} from 'react-bootstrap';

function Transaction(props){
    return (
        <ListGroup horizontal={true} className="my-2" key={props.id}>
        <ListGroup.Item variant="success">{props.money}</ListGroup.Item>
        <ListGroup.Item variant="warning">{props.desc}</ListGroup.Item>
        <ListGroup.Item>{props.tag}</ListGroup.Item>
      </ListGroup>
    )
}

export default Transaction;