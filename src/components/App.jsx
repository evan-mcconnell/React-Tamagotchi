import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Egg from './Egg';
import Store from './Store';
import Work from './Work';

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
        money: 1000,
        food: 50,
        score: 0
      },
      interval: []
    };

    this.handleFeedTamagotchi = this.handleFeedTamagotchi.bind(this);
    this.handlePlayTamagotchi = this.handlePlayTamagotchi.bind(this);
    this.handleRestTamagotchi = this.handleRestTamagotchi.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleBuyFood = this.handleBuyFood.bind(this);
    this.handleDoWork = this.handleDoWork.bind(this);
    this.handleUpgradeWorkTo6 = this.handleUpgradeWorkTo6.bind(this);
    this.handleUpgradeWorkTo12 = this.handleUpgradeWorkTo12.bind(this);
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
    var userResources = Object.assign({}, this.state.user);
    tamagotchiResources.energy-=(1.5/3);
    tamagotchiResources.mood-=(2/3);
    tamagotchiResources.hunger-=(2.5/3);
    userResources.score += 1;
    tamagotchiResources.mood > tamagotchiResources.hunger ? tamagotchiResources.mood = tamagotchiResources.hunger : null;
    tamagotchiResources.mood > tamagotchiResources.energy ? tamagotchiResources.mood = tamagotchiResources.energy : null;
    this.setState({tamagotchi: tamagotchiResources});
    this.setState({user: userResources});
    if (this.state.tamagotchi.energy < 1 || this.state.tamagotchi.hunger < 1 || this.state.tamagotchi.mood < 1) {
      clearInterval(this.resourceTick);
      clearInterval(this.upgradeWorkTo6);
      clearInterval(this.upgradeWorkTo12);
      tamagotchiResources.alive = false;
      this.setState({tamagotchi: tamagotchiResources});
    }
  }

  componentWillUnmount(){
    clearInterval(this.resourceTick);
    clearInterval(this.upgradeWorkTo6);
    clearInterval(this.upgradeWorkTo12);
  }

  componentDidUpdate(){
  }

  handleFeedTamagotchi(){
    if (this.state.user.food > 0 && this.state.tamagotchi.hunger < 96 ) {
      var newTamagotchiHunger = Object.assign({}, this.state.tamagotchi);
      newTamagotchiHunger.hunger+=1;
      this.setState({tamagotchi: newTamagotchiHunger});
      var newUserFood = Object.assign({}, this.state.user);
      newUserFood.food-=1;
      this.setState({user: newUserFood});
    }
  }

  handlePlayTamagotchi(){
    var newTamagotchi = Object.assign({}, this.state.tamagotchi);
    if (newTamagotchi.mood < newTamagotchi.energy && newTamagotchi.mood < newTamagotchi.hunger) {
      newTamagotchi.mood += 5;
      this.setState({tamagotchi: newTamagotchi});
    }
  }

  handleRestTamagotchi(){
    clearInterval(this.resourceTick);
    var newTamagotchiEnergy = Object.assign({}, this.state.tamagotchi);
    newTamagotchiEnergy.energy = 100;
    newTamagotchiEnergy.sleeping = true;
    this.setState({tamagotchi: newTamagotchiEnergy});
    var body = document.getElementsByTagName('body');
    body[0].classList.add('sleep');
    setTimeout(() => {
      body[0].classList.remove('sleep');
      newTamagotchiEnergy.sleeping = false;
      this.componentDidMount();
      this.setState({tamagotchi: newTamagotchiEnergy});
    }, 5000);
  }

  handleRestart(){
    var tamagotchiResources = Object.assign({}, this.state.tamagotchi);
    var userResources = Object.assign({}, this.state.user);
    tamagotchiResources.energy = 50;
    tamagotchiResources.mood =50;
    tamagotchiResources.hunger=50;
    tamagotchiResources.alive=true;
    userResources.food = 50;
    userResources.money = 100;
    userResources.score = 0;
    this.setState({tamagotchi: tamagotchiResources});
    this.setState({user: userResources});
    this.componentDidMount();
  }

  handleBuyFood(){
    if (this.state.user.money > 19 ) {
      var newUser = Object.assign({}, this.state.user);
      newUser.food += 10;
      newUser.money -= 20;
      this.setState({user: newUser});
    }
  }

  handleDoWork(){
    var newUser = Object.assign({}, this.state.user);
    newUser.money += 1;
    this.setState({user: newUser});
  }

  handleUpgradeWorkTo6() {
    if(this.state.user.money >= 50) {
      var userResources = Object.assign({}, this.state.user);
      userResources.money -= 50;
      this.setState({user: userResources});
      this.upgradeWorkTo6 = setInterval(() =>
        this.autoMoney(),
      10000)
    }
  }

  handleUpgradeWorkTo12() {
    if(this.state.user.money >= 80) {
      var userResources = Object.assign({}, this.state.user);
      userResources.money -= 80;
      this.setState({user: userResources});
      this.upgradeWorkTo12 = setInterval(() =>
        this.autoMoney(),
      5000)
    }
  }

  autoMoney() {
    var newUserResources = Object.assign({}, this.state.user);
    newUserResources.money += 1;
    this.setState({user: newUserResources});
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
            onBuyFood={this.handleBuyFood}/>}/>
          <Route path='/work' render={()=><Work
            onDoWork={this.handleDoWork}
            onUpgradeTo6={this.handleUpgradeWorkTo6}
            onUpgradeTo12={this.handleUpgradeWorkTo12} /> }/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
