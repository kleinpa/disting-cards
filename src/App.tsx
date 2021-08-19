import React from "react";
import "./App.scss";

import Card from "./Card";
import Deck from "./Deck";

function App() {
  let deck = Deck;
  let card1 = deck[Math.floor(Math.random() * deck.length)];
  let card2 = deck[Math.floor(Math.random() * deck.length)];

  return (
    <div className="App">
      <header>
        <h1>disting-cards</h1>
      </header>
      <div className="card-row">
        <Card image={card1.image} name={card1.name} />
        <Card image={card2.image} name={card2.name} />
      </div>
    </div>
  );
}

export default App;
