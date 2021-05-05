'use strict';

const userAction = async () => {
  try{
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://cdn-api.co-vin.in/api/v2/admin/location/districts/16', {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en_US'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
  
    if(myJson){
      document.querySelector("h1").innerHTML = 'success';
    }else{
      console.log('no response')
    }

  }catch(err){
    document.querySelector("h1").innerHTML = 'failed again!';
    console.log(err);
  }

}

userAction();