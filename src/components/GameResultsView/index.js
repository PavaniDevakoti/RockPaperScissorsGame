import './index.css'

const GameResultsView = props => {
  const {gameDetails, gameResultsView} = props
  const {yourChoice, opponent, gameStatus} = gameDetails
  console.log(yourChoice, gameStatus)
  const onClickPlayAgain = () => {
    gameResultsView(false)
  }

  return (
    <div className="game-results-container">
      <ul className="choice-list">
        <li>
          <p className="heading">YOU</p>
          <img
            className="choice-img"
            src={yourChoice.imageUrl}
            alt="your choice"
          />
        </li>
        <li>
          <p className="heading">OPPONENT</p>
          <img
            className="choice-img"
            src={opponent.imageUrl}
            alt="opponent choice"
          />
        </li>
      </ul>
      <div className="game-status-card">
        <p className="heading">{gameStatus}</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="playing-btn"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameResultsView
