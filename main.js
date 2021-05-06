
console.log('app starting...')

let readBtn = document.querySelector('.viewmore-btn');
let appointBtn = document.getElementById('getstarteButton');
let contents = document.querySelector('.content-text');
let testFlag = false;


document.addEventListener('click', (event)=>{
    // console.log(event.target);
    // console.log(event.target.id);
    if(event.target.id == "getstarteButton"){
        contents.classList.add('hide');
        readBtn.classList.add('hide');
        appointBtn.classList.add('hide');
        console.log('ok');
        fetchStates();

    }
})


async function fetchStates(){
    try{

        let resjson = '';
        if(testFlag){
            let resjsonStr = `{
                "states": [
                  {
                    "state_id": 58,
                    "state_name": "Andaman and Nicobar Islands",
                    "state_name_l": ""
                  }
                ],
                "ttl": 0
              }`;
              resjson = JSON.parse(resjsonStr);

        }else{

            const res = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`, {
                method: 'GET'
              });
            resjson = await res.json();
        }
        let responseHtml = document.querySelector('.response');
        if(resjson){
            responseHtml.innerHTML = 'success states retrieved'+JSON.stringify(resjson);
        }else{
            responseHtml.innerHTML = 'failed';
        }
        const stateList = document.getElementById('state');
       // console.log(typeOf(resjson));
        //responseHtml.innerHTML = resjson.states;
        resjson.states.forEach(state => {
    
            myOption = document.createElement("option");
            myOption.text = state.state_name;
            myOption.value = state.state_name;
            stateList.appendChild(myOption);
        });
    
        console.log('ok');
    }catch(err){
        let responseHtml = document.querySelector('.response');
        console.log('error ...',err);
        responseHtml.innerHTML = err;
    }

}