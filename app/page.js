'use client'
import {useState} from 'react';
import exampleDataListOne from "./data/dataListOne";
import exampleDataListTwo from "./data/dataListTwo";


export default function Home() {
  const [makeRed,setMakeRed] = useState("");
  const [makeGreen, setMakeGreen] = useState("");
  const [inputListOne, setInputListOne] = useState('');
  const [inputListTwo, setInputListTwo] = useState('');
  const [listOneToDisplay, setListOneToDisplay] = useState(exampleDataListOne);
  const [listTwoToDisplay, setListTwoToDisplay] = useState(exampleDataListTwo);



function handleClick(){
  setMakeGreen("makeGreen");
  setMakeRed("makeRed");
}

function DisplayListOne(){
  return listOneToDisplay.map((name, index)=>{
      if(!listTwoToDisplay.includes(name)){
        return <li key={`one-${index}`} className={makeRed}>{name}</li>
      }else{
        return <li key={`one-${index}`}>{name}</li>
    }
  });
}

function DisplayListTwo(){
  return listTwoToDisplay.map((name, index)=>{
      if(!listOneToDisplay.includes(name)){
        return <li key={`two-${index}`} className={makeGreen}>{name}</li>;
      }else{
        return <li key={`two-${index}`} >{name}</li>;
      }
  })
}

function handleInputListOne(event){
  setInputListOne(event.target.value);
}
function handleInputListTwo(event){
  setInputListTwo(event.target.value);
}

function handleListOneSubmit(){
  let newListOne = inputListOne.split(",");
  setListOneToDisplay(newListOne);
}

function handleListTwoSubmit(){
  let newListTwo = inputListTwo.split(",");
  setListTwoToDisplay(newListTwo);
}

  return (
    <main>
      <div className="arraysContainer">
        <div className="arrayOne">
          <h3>List One</h3>
          <ul className="dataInListOne">
             <DisplayListOne/>
          </ul>
        </div>
        <div className='info-container'>
          <h1>Compare Two Lists</h1>
          <h3>Click the Compare button below to see how these two lists differ.</h3>
          <p>The items List One that are not in List Two will turn red.</p>
          <p> The itmes in List Two that are not in List One will turn green.</p>
          <button onClick={handleClick} className='compare-button'>Compare</button>
          <div className='your-own-lists-entry-container'>
            <div className='your-own-list-one'>
                <input className='list-input-field' type="text" placeholder='Enter items for List One here seperated by a comma.' value={inputListOne} onChange={handleInputListOne}/>
                <button onClick={handleListOneSubmit}>Submit</button>
            </div>
            <div className='your-own-list-two'>
              <input className='list-input-field' type="text"  placeholder='Enter items for List Two here seperated by a comma.' value={inputListTwo} onChange={handleInputListTwo}/>
              <button onClick={handleListTwoSubmit}>Sumbit</button>
            </div>
          </div>
        </div>
        <div className="arrayTwo">
          <h3>List Two</h3>
          <ul className="dataInListTwo">
            <DisplayListTwo/>
          </ul>
        </div>
      </div>
      
    </main>
  );
}
