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
        mood: 50,
        alive: true
      },
      user: {
        money: 100,
        food: 100
      }
    }
    this.handleFeedTamagotchi = this.handleFeedTamagotchi.bind(this);
    this.handlePlayTamagotchi = this.handlePlayTamagotchi.bind(this);
    this.handleRestTamagotchi = this.handleRestTamagotchi.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  randColor(){
    var colorNumber = Math.floor(100000 + Math.random()*900000);
    var color = '#'+colorNumber.toString();
    return color;
  }

  componentDidMount(){
    this.resourceTick = setInterval(() =>
      this.updateResources(),
      1000
    );
  }

  updateResources() {
    var tamagotchiResources = Object.assign({}, this.state.tamagotchi);
    tamagotchiResources.energy-=(1/3);
    tamagotchiResources.mood-=(2/3);
    tamagotchiResources.hunger-=(2.5/3);
    this.setState({tamagotchi: tamagotchiResources})
    if (this.state.tamagotchi.energy < 1 || this.state.tamagotchi.hunger < 1 || this.state.tamagotchi.mood < 1) {
      clearInterval(this.resourceTick);
      tamagotchiResources.alive = false;
      this.setState({tamagotchi: tamagotchiResources});
    }
  }

  componentWillUnmount(){
    clearInterval(this.resourceTick);
  }

  componentDidUpdate(){
    console.log("hunger", this.state.tamagotchi.hunger);
    console.log("user food", this.state.user.food);
  }

  handleFeedTamagotchi(){
    var newTamagotchiHunger = Object.assign({}, this.state.tamagotchi);
    newTamagotchiHunger.hunger+=5;
    this.setState({tamagotchi: newTamagotchiHunger})
    var newUserFood = Object.assign({}, this.state.user);
    newUserFood.food-=1;
    this.setState({user: newUserFood})
  }

  handlePlayTamagotchi(){
    var newTamagotchiMood = Object.assign({}, this.state.tamagotchi);
    newTamagotchiMood.mood += 5;
    this.setState({tamagotchi: newTamagotchiMood})
  }

  handleRestTamagotchi(){
    var newTamagotchiEnergy = Object.assign({}, this.state.tamagotchi);
    newTamagotchiEnergy.energy = 100;
    this.setState({tamagotchi: newTamagotchiEnergy})
  }

  handleRestart(){
    console.log("handlerestart")
    var tamagotchiResources = Object.assign({}, this.state.tamagotchi);
    tamagotchiResources.energy = 50;
    tamagotchiResources.mood =50;
    tamagotchiResources.hunger=50;
    tamagotchiResources.alive=true;
    this.setState({tamagotchi: tamagotchiResources});
    this.componentDidMount();

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
                onRestTamagotchi={this.handleRestTamagotchi}
                onRestart={this.handleRestart} />}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
