import useFetch from "./useFetch";


const TeamAccount = () => {
  const { data: transactions, isLoading, error } = useFetch('http://localhost:8000/transactions')


  return ( 
    <div className="team-account">
      <h1>BALANCE:</h1>
      <h2>Transactions:</h2>
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { transactions && 
          transactions.map((transaction) => (
            <div className="transaction-preview" key={transaction.id}>
                <h2>{ transaction.description }</h2>
                { transaction.amount >= 0 && <p>${ transaction.amount }</p>}
                { transaction.amount < 0 && <p>-${ Math.abs(transaction.amount) }</p>}
            </div>
          ))
      }
    </div>
   );

}
 
export default TeamAccount;