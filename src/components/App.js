import React, { useState } from 'react';
import '../assets/styles/App.css';
import Validation from '../components/Validation';
import Character from '../components/Character';

const App = ()=> {

  let [inputString, setInputString] = useState('');

  const handleInputChange = (event)=>{
    console.log(event.target.value);
    let newString = event.target.value;
    setInputString(newString);
  }

  const handleCharacterRemove = (index)=>{
    console.log('character click called');
    let inpStr = inputString.slice();
    let strArr = inpStr.split('');
    strArr.splice(index, 1);
    setInputString(strArr.join(''));
  }

  const LengthSubComponent = ()=>{
    let length = inputString.length;
    if(length>0){
      return (
        <div>The length of the string is {length}</div>
      )
    }
    else
      return null;
  }

  const CharSubComp = ()=>{
    let charArr = inputString.split('');
    return charArr.map((s, index)=>{
      return (
        <Character key={index} character={s} click={()=>handleCharacterRemove(index)}/>
      )
    })
  }

  return (
    <div className="App">
      <span id="label">Enter String</span>
      <input id="inputText" type="text" onChange={handleInputChange} value={inputString}/>
      <LengthSubComponent />
      <Validation length={inputString.length}/>
      <CharSubComp/>
    </div>
  );
}



export default App;
