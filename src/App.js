import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';




function App() {
// check for  the checked boxes
// for 1
const [checkbox1, setcheckbox1] =useState(false);
const [checkbox2, setcheckbox2] =useState(false);
const [checkbox3, setcheckbox3] =useState(false);
const [checkbox4, setcheckbox4] =useState(false);
const generate=()=>{
  const lowercaseletters=['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const uppercaseLetters=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const numbers=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const specialCharacters=['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', ',', '.', '<', '>', '/', '?']

var whole=[];


if(checkbox1){
  whole=whole.concat(uppercaseLetters);
}

if(checkbox2){
  whole=whole.concat(lowercaseletters);
}
if(checkbox3){
  whole=whole.concat(numbers);
}
if(checkbox4){
  whole=whole.concat(specialCharacters);
}

var password="";
if(whole.length===0){
  alert("Please select at least one character type");
  window.location.reload();
}
for (let i=0;i<12;i++){
var currentindex=Math.floor(Math.random()*whole.length);
password+=whole[currentindex];
}
document.getElementById('result').innerHTML=password;
 document.getElementById('copy').style.display="block";
 document.getElementById('copy').style.backgroundColor="red";
  document.getElementById('copy').innerHTML="copy";
}
const copy=()=>{
  navigator.clipboard.writeText(document.getElementById('result').innerText);
  document.getElementById('copy').style.backgroundColor="yellow";
  document.getElementById('copy').innerHTML="Copied";
}
  return (
    <div className="app">
       <div className="container col-11 col-md-10 col-lg-5 mt-sm-2">
            {/* Image     */}
                    <div className="imagediv mb-0 mt-0">
                      <h2 class="col-11 text-center p-0 m-0">{Strong Password Generator}</h2>
                     <img src="/hacker.jpg" className="image m-0" alt="little hacker guy"/>

                    </div>
            {/* output div    */}
                    <div className="result p-1 mt-0">
                          <h4 class="resultbox text-center p-2 " id="result">Your Password Will be Here</h4>
                           <button id="copy" style={{display:'none'}} onClick={copy}>
                            copy
                            </button>
                    </div>
            {/* coice */}
            
                    <div className="choices">
                          <div className="  choiceslist p-2" id="cho1"     >
                            <label>
                              <input type="checkbox" name="uppercase" 
                              checked={checkbox1}
                              onChange={()=>setcheckbox1(!checkbox1)}/>
                              Include uppercase letters
                            </label>
                          </div>
                           

                           <div class=" choiceslist p-2" id="cho2">
                            <label>
                              <input type="checkbox" 
                              checked={checkbox2}
                              onChange={()=>setcheckbox2(!checkbox2)}/>
                              Include lowercase letters
                            </label>
                           </div>
                       
                         <div class=" choiceslist p-2"  id="cho3">
                           <label>
                              <input type="checkbox" name="numbers" value="numbers"
                              checked={checkbox3}
                              onChange ={()=>setcheckbox3(!checkbox3)} />
                              Include numbers
                            </label>
                           </div>

                           <div class="choiceslist p-2  " id="cho4">
                           <label>
                              <input type="checkbox"
                              checked={checkbox4}
                              onChange={()=>setcheckbox4(!checkbox4)}/>
                              Include special characters
                            </label>                     

                         </div>



                    </div>

           {/* generate */}
                    <button className="generate  mt-0 mb-5 "onClick={generate} >
                      Generate
                    </button>
       </div>
    </div>
  );
}

export default App;
