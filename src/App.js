 
import './App.css';
import { useEffect, useState } from 'react';

// const unitLengths = [
//   { name: 'kilometer', value: 1000 },
//   { name: 'hectometer', value: 100 },
//   { name: 'decameter', value: 10 },
//   { name: 'meter', value: 1 },
//   { name: 'decimeter', value: 0.1 },
//   { name: 'centimeter', value: 0.01 },
//   { name: 'milimeter', value: 0.001 },
// ]

let units = [
  {
      "order" : 1,
      "prefix" : "mili"
  },
  {
      "order" : 2,
      "prefix" : "centi"
  },
  {
      "order" : 3,
      "prefix" : "deci"
  },
  {
      "order" : 4,
      "prefix" : "m"
  },
  {
      "order" : 5,
      "prefix" : "deca"
  },
  {
      "order" : 6,

      "prefix" : "hecto"
  },
  {
      "order" : 7,
      "prefix" : "kilo"
  }
];

function App() {
  const [from, setFrom] = useState('centi');
  const [to, setTo] = useState('mili');
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

 
  useEffect(() => {

    // const keys = Object.values(unitLengths).map((unitLength) => unitLength.name);

    // const convertFrom = "";
    // const convertTo = "kilo";
    // let orderOfConvertTo,orderOfConvertFrom;
    let orderOfConvertTo= units.filter(unit => unit.prefix === to)[0].order;
    let orderOfConvertFrom= units.filter(unit => unit.prefix === from)[0].order;
    const diff = (orderOfConvertFrom-orderOfConvertTo);
    console.log({orderOfConvertTo,orderOfConvertFrom,diff})
    
    setResult(Math.pow(10,diff)*input);

  },[to, from, input])

  return (
   <div className='content'>
   <h1>from</h1>
    <select value={from} onChange={(e) => {
      setFrom(e.target.value);
    }}>
    {units.map((unitLength) => (
      <option key={unitLength.prefix}>{unitLength.prefix}</option>
    ))}
    </select>
   <h1>To</h1>

    <select value={to} onChange={(e) => {
      setTo(e.target.value)
    }}>
    {units.map((unitLength) => (
      <option key={unitLength.prefix}>{unitLength.prefix}</option>
    ))}
    </select>

    <input type={'number'} value={input} onChange={(e) => {

      setInput(e.target.value)
    }} />
    <p>Result:{result}</p>
   </div>
  );
}

export default App;