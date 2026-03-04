import './App.css'

function App() {
  const transactions = []

  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0)

  const expense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + transaction.amount, 0)

  const balance = income - expense

  return (
    <main className="app">
      <header className="app-header">
        <h1>Budget Tracker</h1>
        <p>Étape 1: structure de base prête</p>
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
          <p>{balance.toFixed(2)} €</p>
        </div>
      </section>

      <section className="placeholder" aria-label="Zone de travail">
        <p>Prochaine étape: ajouter le formulaire de transaction.</p>
      </section>
    </main>
  )
}

export default App
