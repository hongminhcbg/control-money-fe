import Transaction from './Transaction';
function TransactionList(props){
    return (
        <div>
            {props.data.map((t) =>{
                return (
                    <Transaction key={t.ID} id={t.ID} money={t.Money} desc={t.Detail} tag={t.Tag}/>)
            })}
        </div>
    )
}

export default TransactionList;