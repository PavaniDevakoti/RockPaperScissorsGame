const PlayingView = props => {
  const {choice, onClickChoice} = props

  const onClicking = () => {
    onClickChoice(choice)
  }

  let dataVal = ''

  switch (choice.id) {
    case 'ROCK':
      dataVal = 'rockButton'
      break
    case 'PAPER':
      dataVal = 'paperButton'
      break
    case 'SCISSORS':
      dataVal = 'scissorsButton'
      break
    default:
      dataVal = ''
      break
  }

  return (
    <li>
      <button
        type="button"
        className="choice-btn"
        onClick={onClicking}
        data-testid={dataVal}
      >
        <img className="choice-img" src={choice.imageUrl} alt={choice.id} />
      </button>
    </li>
  )
}

export default PlayingView
