import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClickCards from './components/ClickCards';
import Header from './components/Header'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import theme from './theme';
import characters from './characters';

const gameChars = () => characters.filter((c, i) => i < 12).map((character) => {
  return { ...character, hasClicked: false }
})

class App extends Component {
  state = {
    headerText: "Click on an image to earn points, but don't click it more than once!",
    winText: "",
    message: '',
    disableClick: false,
    error: '',
    topScore: 0,
    score: 0,
    characters: gameChars()
  }

  shuffleCards = () => {
    const charactersCopy = this.state.characters.slice();
    let currentIndex = charactersCopy.length;
    let randIndex, tempValue
    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = charactersCopy[currentIndex];
      charactersCopy[currentIndex] = charactersCopy[randIndex];
      charactersCopy[randIndex] = tempValue;
    }
    this.setState({ characters: charactersCopy })
  }

  turn = (id) => {
    if (this.state.score === 4) {
      this.setState({
        winText: "Congratulations!",
        headerText: "",
        message: "",
        topScore: 0,
        newGame: false,
        score: 0,
        winState: true
      })
    } else {
      this.setState({
        error: '',
        message: '',
        newGame: false,
        score: this.state.score + 1,
        characters: this.state.characters.map(character => {
          if (character._id === id) {
            character.hasClicked = true
            return character
          }
          return character
        })
      })
      this.shuffleCards();
    }
  }

  resetGame = () => {
    this.setState({
      error: 'shake',
      message: 'You already clicked this one! Start Over!',
      topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
      score: 0,
      disableClick: false
    })
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navbar state={this.state} />
          <Footer state={this.state} />
          <Header state={this.state} />

          {!this.state.winState ?
            <ClickCards characters={this.state.characters}
              error={this.state.error}
              disableClick={this.state.disableClick}
              shuffleCards={this.shuffleCards}
              resetGame={this.resetGame}
              turn={this.turn}
            /> :
            <Typography variant="h5" color="secondary"><p className="winGame">YOU WON!</p></Typography>}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
