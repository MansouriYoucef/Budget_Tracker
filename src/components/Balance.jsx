function Balance({ income, expense, balance }) {
  return (
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
  )
}

export default Balance
