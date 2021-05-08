
console.log('app starting...')

let readBtn = document.querySelector('.viewmore-btn');
let appointBtn = document.getElementById('getstarteButton');
let contents = document.querySelector('.content-text');
let appointmentContainer = document.querySelector('.appointment-container');
let searchApptBtn = document.querySelector(".fetch-appointments-btn");
let bgLoader = document.querySelector('.bg-loader');
let bgLoaderAppt = document.querySelector('.bg-loader-appointment');
let testFlag = false;


document.addEventListener("DOMContentLoaded", function(){
    //....
    //bgLoader.classList.add('hide');
});


document.addEventListener('click', (event)=>{
    // console.log(event.target);
    // console.log(event.target.id);
    if(event.target.id == "getstarteButton"){
        contents.classList.add('hide');
        readBtn.classList.add('hide');
        appointBtn.classList.add('hide');
        appointmentContainer.classList.remove('hide');
        console.log('ok');
        fetchStates();

    }
    if(event.target.id == "fetch-appointment"){
        console.log(event.target);
        fetchAppointments();

    }
})


async function fetchStates(){
    try{
        bgLoader.classList.toggle('hide');
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
                    "state_name": "Bihar2",
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
        // if(resjson){
        //     responseHtml.innerHTML = 'success states retrieved'+JSON.stringify(resjson);
        // }else{
        //     responseHtml.innerHTML = 'failed';
        // }
        const stateList = document.getElementById('state');
       // console.log(typeOf(resjson));
        //responseHtml.innerHTML = resjson.states;
        resjson.states.forEach(state => {
    
            myOption = document.createElement("option");
            myOption.text = state.state_name;
            myOption.value = state.state_id;
            stateList.appendChild(myOption);
        });
        bgLoader.classList.toggle('hide');
        console.log('ok');
    }catch(err){
        let responseHtml = document.querySelector('.response');
        console.log('error ...',err);
        responseHtml.innerHTML = err;
    }

}


async function fetchDistrcits(){
    try{
        //bgLoader.classList.toggle('hide');
        searchApptBtn.disabled = true;
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
        // if(resjson){
        //     responseHtml.innerHTML = 'success district retrieved'+JSON.stringify(resjson);
        // }else{
        //     responseHtml.innerHTML = 'failed';
        // }
        const distList = document.getElementById('district');
        distList.options.length = 1;
       // console.log(typeOf(resjson));
        //responseHtml.innerHTML = resjson.states;
        resjson.districts.forEach(district => {
    
            myOption = document.createElement("option");
            myOption.text = district.district_name;
            myOption.value = district.district_id;
            distList.appendChild(myOption);
        });
        //bgLoader.classList.toggle('hide');
        console.log('ok');
    }catch(err){
        let responseHtml = document.querySelector('.response');
        console.log('error ...',err);
        // responseHtml.innerHTML = err;
    }

}

async function onDistrictSelection(){
    let selecteddist = document.getElementById("district").value;
    console.log(selecteddist)
    searchApptBtn.disabled = false;


}


async function fetchAppointments(){
    try{
        bgLoaderAppt.classList.toggle('hide');
        let selectedState = document.getElementById("state").value;
        let selectedDistrict = document.getElementById("district").value;
        console.log(selectedDistrict);
        let resjson = '';
        if(testFlag){
            let resjsonStr = `{
                "centers": [
                  {
                    "center_id": 1234,
                    "name": "District General Hostpital",
                    "name_l": "",
                    "address": "45 M G Road",
                    "address_l": "",
                    "state_name": "Maharashtra",
                    "state_name_l": "",
                    "district_name": "Satara",
                    "district_name_l": "",
                    "block_name": "Jaoli",
                    "block_name_l": "",
                    "pincode": "413608",
                    "lat": 28.7,
                    "long": 77.1,
                    "from": "09:00:00",
                    "to": "18:00:00",
                    "fee_type": "Free",
                    "vaccine_fees": [
                      {
                        "vaccine": "COVISHIELD",
                        "fee": "250"
                      }
                    ],
                    "sessions": [
                      {
                        "session_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        "date": "31-05-2021",
                        "available_capacity": 50,
                        "min_age_limit": 18,
                        "vaccine": "COVISHIELD",
                        "slots": [
                          "FORENOON",
                          "AFTERNOON"
                        ]
                      }
                    ]
                  }
                ]
              }`;
              resjson = JSON.parse(resjsonStr);

        }else{

            const res = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=512&date=31-03-2021`, {
                method: 'GET'
              });
            resjson = await res.json();
        }
        let responseHtml = document.querySelector('.response');
        if(resjson){
            responseHtml.innerHTML = 'success appt retrieved'+JSON.stringify(resjson);
        }else{
            responseHtml.innerHTML = 'failed';
        }
        bgLoaderAppt.classList.toggle('hide');
    
        console.log('ok');
    }catch(err){
        let responseHtml = document.querySelector('.response');
        console.log('error ...',err);
        // responseHtml.innerHTML = err;
    }

}

