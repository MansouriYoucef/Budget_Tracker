function TransactionForm({
  title,
  amount,
  type,
  date,
  formError,
  onChangeTitle,
  onChangeAmount,
  onChangeType,
  onChangeDate,
  onSubmit,
}) {
  return (
    <section className="panel" aria-label="Ajouter une transaction">
      <h2>Nouvelle transaction rapide</h2>

      <form className="transaction-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Libellé (ex: Courses)"
          value={title}
          onChange={(event) => onChangeTitle(event.target.value)}
        />

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Montant"
          value={amount}
          onChange={(event) => onChangeAmount(event.target.value)}
        />

        <select value={type} onChange={(event) => onChangeType(event.target.value)}>
          <option value="expense">Dépense</option>
          <option value="income">Revenu</option>
        </select>

        <input type="date" value={date} onChange={(event) => onChangeDate(event.target.value)} />

        <button type="submit">Ajouter</button>
      </form>

      {formError && <p className="form-error">{formError}</p>}
    </section>
  )
}

export default TransactionForm
