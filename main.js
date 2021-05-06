
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
    if(event.target.id == "state"){
        console.log(event.target);

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
                  },
                  {
                    "state_id": 59,
                    "state_name": "Assam",
                    "state_name_l": ""
                  },{
                    "state_id": 58,
                    "state_name": "Bihar",
                    "state_name_l": ""
                  },{
                    "state_id": 58,
                    "state_name": "TN",
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
            myOption.value = state.state_id;
            stateList.appendChild(myOption);
        });
    
        console.log('ok');
    }catch(err){
        let responseHtml = document.querySelector('.response');
        console.log('error ...',err);
        responseHtml.innerHTML = err;
    }

}


async function fetchDistrcits(){
    try{
        let selectedState = document.getElementById("state").value;
        console.log(selectedState);
        let resjson = '';
        if(testFlag){
            let resjsonStr = `{
                "districts": [
                  {
                    "state_id": 16,
                    "district_id": 391,
                    "district_name": "Ahmednagar",
                    "district_name_l": ""
                  },
                  {
                    "state_id": 16,
                    "district_id": 392,
                    "district_name": "Pune",
                    "district_name_l": ""
                  }
                ],
                "ttl": 0
              }`;
              resjson = JSON.parse(resjsonStr);

        }else{

            const res = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedState}`, {
                method: 'GET'
              });
            resjson = await res.json();
        }
        let responseHtml = document.querySelector('.response');
        if(resjson){
            responseHtml.innerHTML = 'success district retrieved'+JSON.stringify(resjson);
        }else{
            responseHtml.innerHTML = 'failed';
        }
        const distList = document.getElementById('district');
        distList.options.length = 0;
       // console.log(typeOf(resjson));
        //responseHtml.innerHTML = resjson.states;
        resjson.districts.forEach(district => {
    
            myOption = document.createElement("option");
            myOption.text = district.district_name;
            myOption.value = district.district_id;
            distList.appendChild(myOption);
        });
    
        console.log('ok');
    }catch(err){
        let responseHtml = document.querySelector('.response');
        console.log('error ...',err);
        responseHtml.innerHTML = err;
    }

}


