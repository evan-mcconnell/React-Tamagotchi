import React from 'react';
import Header from './Header';
// import TicketList from './TicketList';
// import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Egg from './Egg';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      tamagotchi: {
        hunger: 50,
        energy: 50,
        mood: 50
      },
      user: {
        money: 100,
        food: 100
      }
    }
    this.handleFeedTamagotchi = this.handleFeedTamagotchi.bind(this);
    this.handlePlayTamagotchi = this.handlePlayTamagotchi.bind(this);
    this.handleRestTamagotchi = this.handleRestTamagotchi.bind(this);
  }

  randColor(){
    var colorNumber = Math.floor(100000 + Math.random()*900000);
    var color = '#'+colorNumber.toString();
    return color;
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList})
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentDidUpdate(){
    console.log("hunger", this.state.tamagotchi.hunger);
    console.log("user food", this.state.user.food);
  }

  handleFeedTamagotchi(){
    var newTamagotchiHunger = Object.assign({}, this.state.tamagotchi);
    newTamagotchiHunger.hunger+=1;
    this.setState({tamagotchi: newTamagotchiHunger})
    var newUserFood = Object.assign({}, this.state.user);
    newUserFood.food-=1;
    this.setState({user: newUserFood})
  }

  handlePlayTamagotchi(){
    console.log(this.state.tamagotchi);
    var newTamagotchiMood = Object.assign({}, this.state.tamagotchi);
    newTamagotchiMood.mood += 5;
    this.setState({tamagotchi: newTamagotchiMood})
  }

  handleRestTamagotchi(){
    var newTamagotchiEnergy = Object.assign({}, this.state.tamagotchi);
    newTamagotchiEnergy.energy = 100;
    this.setState({tamagotchi: newTamagotchiEnergy})
  }

  render(){
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet"/>
        <style global jsx>{`
          * {
            font-family: 'Dokdo', cursive;
          }
          `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Egg
                tamagotchi={this.state.tamagotchi}
                user={this.state.user}
                onFeedTamagotchi={this.handleFeedTamagotchi}
                onPlayTamagotchi={this.handlePlayTamagotchi}
                onRestTamagotchi={this.handleRestTamagotchi} />}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
