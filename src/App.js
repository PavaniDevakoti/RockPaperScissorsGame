import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import GameResultsView from './components/GameResultsView'
import PlayingView from './components/PlayingView'

import './App.css'
import {
  HomeContainer,
  ScoreCard,
  Paragraph,
  ScoreVal,
  ScoreContainer,
  Heading,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    gameStatus: '',
    yourChoice: '',
    opponent: '',
    playAgain: false,
  }

  onClickChoice = yourChoice => {
    const number = Math.floor(Math.random() * 3)
    const opponent = choicesList[number]
    const opponentChoice = opponent.id

    let gameStatus = ''
    if (yourChoice.id === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        gameStatus = 'YOU WON'
      } else if (opponentChoice === 'SCISSORS') {
        gameStatus = 'YOU LOSE'
      } else {
        gameStatus = 'IT IS DRAW'
      }
    } else if (yourChoice.id === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        gameStatus = 'YOU WON'
      } else if (opponentChoice === 'PAPER') {
        gameStatus = 'YOU LOSE'
      } else {
        gameStatus = 'IT IS DRAW'
      }
    } else if (yourChoice.id === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        gameStatus = 'YOU WON'
      } else if (opponentChoice === 'ROCK') {
        gameStatus = 'YOU LOSE'
      } else {
        gameStatus = 'IT IS DRAW'
      }
    }

    this.setState({gameStatus, yourChoice, opponent, playAgain: true})

    if (gameStatus === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (gameStatus === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
  }

  gameResultsView = playAgain => {
    this.setState({playAgain})
  }

  render() {
    const {yourChoice, opponent, score, gameStatus, playAgain} = this.state
    const gameDetails = {
      yourChoice,
      opponent,
      gameStatus,
    }
    return (
      <HomeContainer>
        <ScoreContainer>
          <Heading>
            Rock <br /> Paper <br />
            Scissors
          </Heading>
          <ScoreCard>
            <Paragraph>Score</Paragraph>
            <ScoreVal>{score}</ScoreVal>
          </ScoreCard>
        </ScoreContainer>
        <div>
          {playAgain ? (
            <GameResultsView
              gameDetails={gameDetails}
              gameResultsView={this.gameResultsView}
            />
          ) : (
            <ul className="choice-list">
              {choicesList.map(each => (
                <PlayingView
                  key={each.id}
                  choice={each}
                  onClickChoice={this.onClickChoice}
                />
              ))}
            </ul>
          )}
        </div>
        <div className="rules-btn-card">
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  Rules
                </button>
              }
            >
              {close => (
                <>
                  <div className="close-btn">
                    <button type="button" onClick={() => close()}>
                      <RiCloseLine />
                    </button>
                  </div>
                  <img
                    className="rules-img"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </>
              )}
            </Popup>
          </div>
        </div>
      </HomeContainer>
    )
  }
}
export default App
