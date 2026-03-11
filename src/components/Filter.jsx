function Filter({ filter, onChangeFilter }) {
  return (
    <div className="filter-group" role="group" aria-label="Filtrer les transactions">
      <button
        type="button"
        className={filter === 'all' ? 'filter-button active' : 'filter-button'}
        onClick={() => onChangeFilter('all')}
      >
        Toutes
      </button>
      <button
        type="button"
        className={filter === 'income' ? 'filter-button active' : 'filter-button'}
        onClick={() => onChangeFilter('income')}
      >
        Revenus
      </button>
      <button
        type="button"
        className={filter === 'expense' ? 'filter-button active' : 'filter-button'}
        onClick={() => onChangeFilter('expense')}
      >
        Dépenses
      </button>
    </div>
  )
}

export default Filter
