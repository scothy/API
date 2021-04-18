import React, {useState} from "react";
import './App.css';
import Cards from "./components/Cards";

function App() {
const [giveQuote, setgiveQuote] = useState ([])

  const simpleQuote = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
    
    .then((response) => response.json())
   
    .then((data) => {
      setgiveQuote(data)
      
    });
   };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={simpleQuote} >APPUI</button>
     {giveQuote.map((quote, index) => {
       return (
         <Cards key ={index} character= {quote.character}
         image= {quote.image}
         quote= {quote.quote}/>
       )
     })}
      
      </header>
    </div>
  );
}

export default App;
