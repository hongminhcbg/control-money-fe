import Transaction from './Transaction';
import '../../css/detail.css';
function TransactionList(props){
    return (
        <div className="hero-trans">
            {props.data.map((t) =>{
                return (
                    <Transaction key={t.ID} id={t.ID} money={t.Money} desc={t.Detail} tag={t.Tag}/>)
            })}
        </div>
    )
}

export default TransactionList;