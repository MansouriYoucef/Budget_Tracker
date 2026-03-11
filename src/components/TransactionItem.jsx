function TransactionItem({ transaction, onDelete }) {
  return (
    <tr>
      <td className="transaction-title">{transaction.title}</td>
      <td className="transaction-type">{transaction.type === 'income' ? 'Revenu' : 'Dépense'}</td>
      <td className="transaction-date">{transaction.date || 'Date non définie'}</td>
      <td className={transaction.type === 'income' ? 'positive' : 'negative'}>
        {transaction.type === 'income' ? '+' : '-'}
        {transaction.amount.toFixed(2)} €
      </td>
      <td>
        <button type="button" className="delete-button" onClick={() => onDelete(transaction.id)}>
          Supprimer
        </button>
      </td>
    </tr>
  )
}

export default TransactionItem
