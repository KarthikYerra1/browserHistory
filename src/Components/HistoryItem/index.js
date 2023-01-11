import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDelete = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-details-container">
        <img src={logoUrl} className="logo-image" alt={title} />
        <div className="history-delete-container">
          <div className="site-details">
            <p>{title}</p>
            <p>{domainUrl}</p>
          </div>
          <button
            className="delete-button"
            onClick={onDelete}
            type="button"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
