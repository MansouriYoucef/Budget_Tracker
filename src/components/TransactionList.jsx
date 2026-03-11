import Filter from './Filter'
import TransactionItem from './TransactionItem'

function TransactionList({
  filter,
  onChangeFilter,
  transactions,
  onDelete,
  onClearAll,
}) {
  return (
    <section className="panel" aria-label="Liste des transactions">
      <div className="transactions-header-row">
        <div className="transactions-title-group">
          <h2>Transactions</h2>
          <button type="button" className="clear-button" onClick={onClearAll}>
            Réinitialiser tout
          </button>
        </div>

        <Filter filter={filter} onChangeFilter={onChangeFilter} />
      </div>

      {transactions.length === 0 ? (
        <p className="empty-state">Aucune transaction pour ce filtre.</p>
      ) : (
        <div className="table-wrapper">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Type</th>
                <th>Date</th>
                <th>Montant</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDelete} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default TransactionList
