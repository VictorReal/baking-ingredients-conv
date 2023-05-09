import data from './UnitObject.js'

let itemsData = null;

function Converter() {
  itemsData = data.slice().map(item => ({
    ...item,
    exchangeRate: item.unitCode * item.unitCode
  }));
  renderPart1(itemsData);
}

function renderPart1(items) {
  const itemsList = document.querySelector('#unittypeList');
  const targetItemsList = document.querySelector('#targetUnittypeList');
  items.forEach(item => {
    const optionItem = document.createElement('option');
    optionItem.textContent = item.unitName;
    optionItem.value = item.unitCode;
    optionItem.dataset.type = item.unitType;
    optionItem.dataset.sign = item.unitSign;
    itemsList.appendChild(optionItem);

    const targetOptionItem = document.createElement('option');
    targetOptionItem.textContent = item.unitName;
    targetOptionItem.value = item.unitCode;
    targetOptionItem.dataset.type = item.unitType;
    targetOptionItem.dataset.sign = item.unitSign;
    targetItemsList.appendChild(targetOptionItem);
  });
  const calculateButton = document.querySelector('#calculateButton');
  calculateButton.addEventListener('click', () => {
    const selectedItemsCode = itemsList.value;
    const selectedItems = itemsData.find(item => item.unitCode === selectedItemsCode);
    const targetItemsCode = targetItemsList.value;
    const targetItems = itemsData.find(item => item.unitCode === targetItemsCode);
    const amount = document.querySelector('#amountInput').value;
    if (selectedItems && targetItems && amount) {
      const unitToUnif = targetItems.unitFromUnif / selectedItems.unitFromUnif;
      const result = amount * selectedItems.unitToUnif * unitToUnif;
      renderPart2(selectedItems.unitSign, targetItems.unitSign, result.toFixed(2));  
    }
  });

}

function renderPart2(fromItemsCode, toItemsCode, exchangeRate) {
  const part2Div = document.querySelector('#part2');
  if (part2Div) {
    part2Div.innerHTML = `
      <h2>${fromItemsCode} to ${toItemsCode} Rate: ${exchangeRate}</h2>
    `;
  } else {
    const part1Div = document.querySelector('#part1');
    part1Div.innerHTML += `
      <div id="part2">
        <h2>${fromItemsCode} to ${toItemsCode} Rate: ${exchangeRate}</h2>
      </div>
    `;
  }
}

Converter();
export default Converter




/*
let unittypeList = units;
let targetUnittypeList = units;
let density = 1;
let amountInput = document.getElementById('#calculateButton')

let units = JSON.parse(JSON.stringify(data));
console.log(units)



 <select id="ingredientsList"></select>


let result= '';
if (unittypeList.unittype === 'volume' && targetUnittypeList.unittype === 'weight'){
   result =  density / unittypeList * targetUnittypeList * amountInput 
}


function Converter () {
  
}
/*
const carsYears = data.map(function(car){
    return car.year;
})

let result= '';
if (unittypeList.unittype === 'volume' && targetUnittypeList.unittype === 'weight'){
   result =  density / unittypeList * targetUnittypeList * amountInput 
} else if (unittypeList.unittype === 'weight' && targetUnittypeList.unittype === 'volume'){
   result =  unittypeList / density * targetUnittypeList * amountInput
} else if (unittypeList.unittype === targetUnittypeList.unittype){
   result =  unittypeList * targetUnittypeList * amountInput
}*/

//p = m/v   m=p/v   v= m/p





/*rendering first part
function renderPart1(currency) {
  const currencyList = document.querySelector('#currencyList');
  const targetCurrencyList = document.querySelector('#targetCurrencyList');
  currency.forEach(curr => {
    const optionItem = document.createElement('option');
    optionItem.textContent = curr.txt;
    optionItem.value = curr.cc;
    currencyList.appendChild(optionItem);

    const targetOptionItem = document.createElement('option');
    targetOptionItem.textContent = curr.txt;
    targetOptionItem.value = curr.cc;
    targetCurrencyList.appendChild(targetOptionItem);
  });
  const calculateButton = document.querySelector('#calculateButton');
  calculateButton.addEventListener('click', () => {
    const selectedCurrencyCode = currencyList.value;
    const selectedCurrency = currencyData.find(curr => curr.cc === selectedCurrencyCode);
    const targetCurrencyCode = targetCurrencyList.value;
    const targetCurrency = currencyData.find(curr => curr.cc === targetCurrencyCode);
    const amount = document.querySelector('#amountInput').value;
    if (selectedCurrency && targetCurrency && amount) {
      const exchangeRate = targetCurrency.rate / targetCurrency.exchangeRate;
      const result = amount * (selectedCurrency.rate / selectedCurrency.exchangeRate) / exchangeRate;
      renderPart2(selectedCurrencyCode, targetCurrencyCode, result.toFixed(2));
    }
  });
}*/
//rendering second part
/*
function renderPart2(fromCurrencyCode, toCurrencyCode, exchangeRate) {
  const part2Div = document.querySelector('#part2');
  if (part2Div) {
    part2Div.innerHTML = `
      <h2>${fromCurrencyCode} to ${toCurrencyCode} Rate: ${exchangeRate}</h2>
    `;
  }else {
    const part1Div = document.querySelector('#part1');
    part1Div.innerHTML += `
      <div id="part2">
        <h2>${fromCurrencyCode} to ${toCurrencyCode} Rate: ${exchangeRate}</h2>
      </div>
    `;
  }
}

getData();
*/