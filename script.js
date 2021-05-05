'use strict';

const userAction = async () => {
  const response = await fetch('https://api.covid19api.com/countries');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
  document.getElementById("h1").innerHTML = myJson.toString();

}

userAction();