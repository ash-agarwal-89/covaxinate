'use strict';

const userAction = async () => {
  const response = await fetch('https://crossorigin.me/https://cdn-api.co-vin.in/api/v2/admin/location/states', {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en_US'
    }
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
  try{
    if(myJson){
      document.querySelector("h1").innerHTML = 'mmmm';
    }else{
      console.log('no response')
    }

  }catch(err){
    console.log(err);
  }

}

userAction();