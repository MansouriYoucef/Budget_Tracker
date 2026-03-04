import { useEffect, useMemo, useState } from 'react'
import './App.css'

const STORAGE_KEY = 'budget_tracker_transactions'

function App() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const storedTransactions = localStorage.getItem(STORAGE_KEY)

      if (!storedTransactions) {
        return []
      }

      const parsedTransactions = JSON.parse(storedTransactions)
      return Array.isArray(parsedTransactions) ? parsedTransactions : []
    } catch {
      return []
    }
  })
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  const income = useMemo(
    () =>
      transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.amount, 0),
    [transactions],
  )

  const expense = useMemo(
    () =>
      transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((sum, transaction) => sum + transaction.amount, 0),
    [transactions],
  )

  const balance = income - expense

  const handleSubmit = (event) => {
    event.preventDefault()

    const numericAmount = Number(amount)

    if (!title.trim() || Number.isNaN(numericAmount) || numericAmount <= 0) {
      return
    }

    const newTransaction = {
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: numericAmount,
      type,
    }

    setTransactions((prev) => [newTransaction, ...prev])
    setTitle('')
    setAmount('')
    setType('expense')
  }

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id))
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Budget Tracker</h1>
        <p>Version MVP prête à être partagée.</p>
      </header>

      <section className="summary" aria-label="Résumé du budget">
        <div className="summary-card">
          <h2>Revenus</h2>
          <p>{income.toFixed(2)} €</p>
        </div>

        <div className="summary-card">
          <h2>Dépenses</h2>
          <p>{expense.toFixed(2)} €</p>
        </div>

        <div className="summary-card">
          <h2>Solde</h2>
          <p className={balance >= 0 ? 'positive' : 'negative'}>{balance.toFixed(2)} €</p>
        </div>
      </section>

      <section className="panel" aria-label="Ajouter une transaction">
        <h2>Nouvelle transaction rapide</h2>

        <form className="transaction-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Libellé (ex: Courses)"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Montant"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />

          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="expense">Dépense</option>
            <option value="income">Revenu</option>
          </select>

          <button type="submit">Ajouter</button>
        </form>
      </section>

      <section className="panel" aria-label="Liste des transactions">
        <h2>Transactions</h2>

        {transactions.length === 0 ? (
          <p className="empty-state">Aucune transaction pour le moment.</p>
        ) : (
          <ul className="transactions-list">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="transaction-item">
                <div>
                  <p className="transaction-title">{transaction.title}</p>
                  <p className="transaction-type">
                    {transaction.type === 'income' ? 'Revenu' : 'Dépense'}
                  </p>
                </div>

                <div className="transaction-right">
                  <p className={transaction.type === 'income' ? 'positive' : 'negative'}>
                    {transaction.type === 'income' ? '+' : '-'}
                    {transaction.amount.toFixed(2)} €
                  </p>
                  <button type="button" onClick={() => handleDelete(transaction.id)}>
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
