import React from 'react';
import './Main.css';
import Converter from './Converter.js';


function Main() {
    
    return (

    <main>    
        <Converter />
        <div id="part1">
            <h2>Convert from:</h2>
            <input type="number" id="amountInput" placeholder="Enter amount" min="0" />
            <select id="unittypeList"></select>
           
            <h2>Convert to:</h2>
            <select id="targetUnittypeList"></select>
            <button id="calculateButton">Calculate</button>
      </div>
      <div id="part2"></div> 
    </main>
    );

}
export default Main;