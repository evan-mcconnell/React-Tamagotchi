import React from 'react';
import Header from './Header';
// import TicketList from './TicketList';
// import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Egg from './Egg';
import Store from './Store';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      tamagotchi: {
        hunger: 50,
        energy: 50,
        mood: 50,
        alive: true,
        sleeping: false
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
    this.handleBuyFood = this.handleBuyFood.bind(this);
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
    tamagotchiResources.mood > tamagotchiResources.hunger ? tamagotchiResources.mood = tamagotchiResources.hunger : null;
    tamagotchiResources.mood > tamagotchiResources.energy ? tamagotchiResources.mood = tamagotchiResources.energy : null;
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
    if (this.state.user.food > 0 && this.state.tamagotchi.hunger < 96 ) {
      var newTamagotchiHunger = Object.assign({}, this.state.tamagotchi);
      newTamagotchiHunger.hunger+=5;
      this.setState({tamagotchi: newTamagotchiHunger})
      var newUserFood = Object.assign({}, this.state.user);
      newUserFood.food-=1;
      this.setState({user: newUserFood})
    }
  }

  handlePlayTamagotchi(){
    var newTamagotchi = Object.assign({}, this.state.tamagotchi);
    if (newTamagotchi.mood < newTamagotchi.energy && newTamagotchi.mood < newTamagotchi.hunger) {
      newTamagotchi.mood += 5;
      this.setState({tamagotchi: newTamagotchi})
    }
  }

  handleRestTamagotchi(){
    clearInterval(this.resourceTick);
    var newTamagotchiEnergy = Object.assign({}, this.state.tamagotchi);
    newTamagotchiEnergy.energy = 100;
    newTamagotchiEnergy.sleeping = true;
    this.setState({tamagotchi: newTamagotchiEnergy});
    var body = document.getElementsByTagName("body");
    body[0].classList.add("sleep");
    setTimeout(() => {
      body[0].classList.remove("sleep");
      newTamagotchiEnergy.sleeping = false;
      this.componentDidMount();
      this.setState({tamagotchi: newTamagotchiEnergy});
    }, 5000)
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

  handleBuyFood(){
    if (this.state.user.money > 19 ) {
      console.log(this.state.user);
      var newUser = Object.assign({}, this.state.user);
      newUser.food += 10;
      newUser.money -= 20;
      this.setState({user: newUser});
    }
  }

  render(){
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet"/>
        <style global jsx>{`
          * {
            font-family: 'Dokdo', cursive;
          }
          body{
            background: repeating-linear-gradient(
              to right,
              #f6ba52,
              #f6ba52 10px,
              #ffd180 10px,
              #ffd180 20px
              );
          }
          .sleep{
            background: repeating-linear-gradient(
              to right,
              darkslateblue,
              darkslateblue 10px,
              midnightblue 10px,
              midnightblue 20px
              );
          }
          `}</style>
        <Header state={this.state}/>
        <Switch>
          <Route exact path='/' render={()=><Egg
                tamagotchi={this.state.tamagotchi}
                user={this.state.user}
                onFeedTamagotchi={this.handleFeedTamagotchi}
                onPlayTamagotchi={this.handlePlayTamagotchi}
                onRestTamagotchi={this.handleRestTamagotchi}
                onRestart={this.handleRestart} />}/>
          <Route path='/store' render={()=><Store
            user={this.state.user}
            onBuyFood={this.handleBuyFood}/>}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
