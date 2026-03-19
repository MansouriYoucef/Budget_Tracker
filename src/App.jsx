import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

const STORAGE_KEY = 'budget_tracker_transactions'
const getToday = () => new Date().toISOString().split('T')[0]

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
  const [date, setDate] = useState(getToday)
  const [filter, setFilter] = useState('all')
  const [formError, setFormError] = useState('')

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

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') {
      return transactions
    }

    return transactions.filter((transaction) => transaction.type === filter)
  }, [filter, transactions])

  const handleSubmit = (event) => {
    event.preventDefault()

    const numericAmount = Number(amount)

    if (!title.trim()) {
      setFormError('Le libellé est obligatoire.')
      return
    }

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      setFormError('Le montant doit être supérieur à 0.')
      return
    }

    if (!date) {
      setFormError('La date est obligatoire.')
      return
    }

    const newTransaction = {
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: numericAmount,
      type,
      date,
    }

    setTransactions((prev) => [newTransaction, ...prev])
    setTitle('')
    setAmount('')
    setType('expense')
    setDate(getToday())
    setFormError('')
  }

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id))
  }

  const handleClearAll = () => {
    if (transactions.length === 0) {
      return
    }

    const shouldClear = window.confirm('Supprimer toutes les transactions ?')

    if (!shouldClear) {
      return
    }

    setTransactions([])
    setFilter('all')
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Budget Tracker</h1>
        <p>Version MVP prête à être partagée.</p>
      </header>

      <Balance income={income} expense={expense} balance={balance} />

      <TransactionForm
        title={title}
        amount={amount}
        type={type}
        date={date}
        formError={formError}
        onChangeTitle={(value) => {
          setTitle(value)
          setFormError('')
        }}
        onChangeAmount={(value) => {
          setAmount(value)
          setFormError('')
        }}
        onChangeType={setType}
        onChangeDate={(value) => {
          setDate(value)
          setFormError('')
        }}
        onSubmit={handleSubmit}
      />

      <TransactionList
        filter={filter}
        onChangeFilter={setFilter}
        transactions={filteredTransactions}
        onDelete={handleDelete}
        onClearAll={handleClearAll}
      />
    </main>
  )
}

export default App
