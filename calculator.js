
//const connection = new WebSocket('ws://localhost:8080');
const connection = new WebSocket('wss://reo.epizy.com/?i=1');

const calculationInput = document.getElementById( 'calculationInput' )
const calculateButton = document.getElementById( 'calculateButton' )


connection.onopen = (event) => {
    console.log("WebSocket is open now.");
};

connection.onclose = (event) => {
    console.log("WebSocket is closed now.");
};

connection.onerror = (event) => {
    console.error("WebSocket error observed:", event);
};

connection.onmessage = (event) => {
  const chat = document.getElementById("chat");

  count = chat.childElementCount;
  console.log(count);
  if( count >= 10){
    chat.removeChild(chat.childNodes[0]);
  }

  //chat.innerHTML += event.data;
  chat.innerHTML += `<p>${event.data}</p>`;
};

calculateButton.addEventListener("click", () => {
  
  try{  
      var answer = Function('"use strict";return ('+ calculationInput.value +')')();                
      let ansEquation = calculationInput.value + " = " + answer
      //   const data = `<p>${ansEquation}</p>`;
      const data = ansEquation;
      connection.send(data);
  }
  catch(error){
      console.log("invalid input")
  }
  calculationInput.value = "";
});