'use strict';

const userAction = async () => {
  
  const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states', {
    method: 'GET'
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);
  try{
    if(myJson){
      document.querySelector("h1").innerHTML = 'states retreieved';
    }else{
      console.log('no response')
    }

  }catch(err){
    document.querySelector("h1").innerHTML = 'failed now!';
    console.log(err);
  }

}

userAction();