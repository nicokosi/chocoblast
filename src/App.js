import React, {Component} from 'react';
import croissant from './croissant.svg';
import './App.scss';
import './Buttons.scss';
import './Explosion.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      shouldExplode: false
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={croissant} className="App-logo" alt="logo"/>
          <h1 className="App-title">Comité de Prévention à la sécurité</h1>
        </header>
        <div className="body">
          {this.generateCroissants(50)}
          <button id="chocoblaster-btn" className="btn red"
                  onClick={() => this.chocoblaster()}>
            Chocoblaster
          </button>
        </div>
      </div>
    );
  }

  chocoblaster() {
    this.setState({shouldExplode: true});
    const url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&su=Douceurs chocolatées&to=dsi-dev@vidal.fr&body=";
    const bodies = [
       "Chers collègues,\nPour rappel, il est déconseillé de manger régulièrement des viennoiseries. Préférez les fruits ! 🍏🍒🍇\n",
       "Chers collègues,\nPour votre santé, je vous rappelle qu'il est déconseillé d'abuser du café ! ☕☕☕\nEn cas de manque, je vous conseille les produits suivants : https://www.vidal.fr/recherche/index/q:caf%C3%A9+nutriment/"
    ];
    const body = bodies[Math.floor(Math.random() * bodies.length)];
    const signature = "\nSigné : le Comité de Prévention Informatique";

    setTimeout(function(){
      const encodedUrl = encodeURI(url + body + signature);
      window.open(encodedUrl)
    }, 1500);
  }

  generateCroissants(number) {
    const {shouldExplode} = this.state;
    var croissants = [];
    for (var i = 0; i < number; i++) {
      croissants.push(<div className={shouldExplode ? 'box' : ''}
                           onAnimationEnd={() => this.setState({shouldExplode: false})}/>)
    }

    return croissants
  }

}

export default App;
