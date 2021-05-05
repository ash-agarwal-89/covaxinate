'use strict';

const userAction = async () => {
  const response = await fetch('https://api.covid19api.com/countries', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
  if(myJson){
    document.querySelector("h1").innerHTML = 'mmmm';
  }else{
    console.log('no response')
  }

}

userAction();