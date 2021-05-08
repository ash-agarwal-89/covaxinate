
console.log('app starting...')

let readBtn = document.querySelector('.viewmore-btn');
let appointBtn = document.getElementById('getstarteButton');
let contents = document.querySelector('.content-text');
let appointmentContainer = document.querySelector('.appointment-container');
let searchApptBtn = document.querySelector(".fetch-appointments-btn");
let bgLoader = document.querySelector('.bg-loader');
let bgLoaderAppt = document.querySelector('.bg-loader-appointment');

let closeBtn = document.getElementById('close-btn');
let mainContent =  document.querySelector('.main');
let testFlag = false;

// document.addEventListener('contextmenu', function(e) {
//   if(!testFlag)
//   e.preventDefault();
// });


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
    if(event.target.classList == "slots"){
      let sessionsElement = JSON.parse(event.target.parentElement.dataset.sessions);
      console.log(sessionsElement);
      console.log(sessionsElement.name);
      
      appointmentContainer.classList.toggle('blur');
      const modaleElement = document.createElement('session-modal');
      console.log('modaleElement .. ',modaleElement);
      modaleElement.sessions = event.target.parentElement.dataset.sessions;
      //modaleElement.hospital = 'exaple';
      //appointmentsList.appendChild(el);
      // while (mainContent.firstChild) {
      //   mainContent.removeChild(mainContent.lastChild);
      // }

      mainContent.appendChild(modaleElement);
      // const appointmentsList = document.querySelector('.appointments-list');
      
      let sessionModal = document.querySelector('.session-modal');
      sessionModal.classList.toggle('show-modal');
      sessionsElement.sessions.forEach(sessionItem => {
        const sessionItemEl = document.createElement('session-item');
        sessionItemEl.sessionItem = sessionItem;
        sessionModal.appendChild(sessionItemEl);
        let tempVar = sessionItem.session_id;
        console.log('sessionItemEl.session_id--- ',sessionItem.session_id);
        // let parentEl = document.querySelector(`#${sessionItem.session_id} > .session-slots`);
        let childElems = document.getElementById(tempVar).childNodes;
        console.log(childElems);
        let parentEl = null;
        childElems.forEach(el => {
          console.log(el.className);
          if(el.className == 'session-slots'){
            parentEl = el;
          }
        });

        const sessionSlots = sessionItem.slots;
        sessionSlots.forEach(slot => {
          console.log('slot ', parentEl);
          let childEl = document.createElement('h4');
          childEl.innerHTML = `${slot}`;
          childEl.className = "timeslot";
          parentEl.appendChild(childEl);
          
        })

      })
    }
    if(event.target.id == "close-btn"){
      console.log('close fired');
      let sessionModal = document.querySelector('.session-modal');
      sessionModal.classList.remove('show-modal');
      appointmentContainer.classList.toggle('blur');
      sessionModal.parentNode.removeChild(sessionModal);
    }
})


async function fetchStates(){
    try{
        // bgLoader.classList.toggle('hide');
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
                    "state_name": "Tamil Nadu",
                    "state_name_l": ""
                  },{
                    "state_id": 58,
                    "state_name": "Maharashtra",
                    "state_name_l": ""
                  }
                  ,{
                    "state_id": 58,
                    "state_name": "Delhi",
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
        // bgLoader.classList.toggle('hide');
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
                    "district_name": "Tinsukia",
                    "district_name_l": ""
                  },
                  {
                    "state_id": 16,
                    "district_id": 392,
                    "district_name": "Dibrugarh",
                    "district_name_l": ""
                  },
                  {
                    "state_id": 16,
                    "district_id": 393,
                    "district_name": "Guwahati",
                    "district_name_l": ""
                  },
                  {
                    "state_id": 16,
                    "district_id": 394,
                    "district_name": "Jorhat",
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
      let selecteddate = '';
      let todaydate = new Date();
      console.log(todaydate.getDate());
      let Tday = (todaydate.getDate()<10)?'0'+todaydate.getDate():todaydate.getDate();

      let Tmonth = (todaydate.getMonth()<10)?'0'+(todaydate.getMonth()+1):(todaydate.getMonth()+1);


      let Tyear = (todaydate.getFullYear()<10)?'0'+todaydate.getFullYear():todaydate.getFullYear();

      console.log(Tday+'-'+Tmonth+'-'+todaydate.getFullYear());

      selecteddate = Tday+'-'+Tmonth+'-'+Tyear;

      console.log(selecteddate);

        // bgLoaderAppt.classList.toggle('hide');
        let selectedState = document.getElementById("state").value;
        let selectedDistrict = document.getElementById("district").value;
        console.log(selectedDistrict);
        let resjson = '';
        if(testFlag){
            let resjsonStr = `{
                "centers": [
                    {
                        "center_id": 642106,
                        "name": "Bisa Gaon HWC",
                        "address": "Bisa Gaon",
                        "state_name": "Assam",
                        "district_name": "Tinsukia",
                        "block_name": "Ketetong Block",
                        "pincode": 786182,
                        "lat": 27,
                        "long": 95,
                        "from": "09:00:00",
                        "to": "17:00:00",
                        "fee_type": "Free",
                        "sessions": [
                          {
                            "session_id": "f4b5c8d2-4f7d-4cb3-8f38-35e2c039d8a5",
                            "date": "08-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "09:00AM-11:00AM",
                              "11:00AM-01:00PM",
                              "01:00PM-03:00PM",
                              "03:00PM-05:00PM"
                            ]
                          }
                        ]
                      },
                      {
                        "center_id": 695511,
                        "name": "Junior Basic School Kakopather",
                        "address": "Kakopather Tinsukia",
                        "state_name": "Assam",
                        "district_name": "Tinsukia",
                        "block_name": "Kakopathar Block",
                        "pincode": 786152,
                        "lat": 27,
                        "long": 95,
                        "from": "10:00:00",
                        "to": "14:00:00",
                        "fee_type": "Free",
                        "sessions": [
                          {
                            "session_id": "da8d1d32-d12f-4814-a064-aad85906cad1",
                            "date": "08-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 18,
                            "vaccine": "COVAXIN",
                            "slots": [
                              "10:00AM-11:00AM",
                              "11:00AM-12:00PM",
                              "12:00PM-01:00PM",
                              "01:00PM-02:00PM"
                            ]
                          },
                          {
                            "session_id": "da8d1dii2-d12f-4814-a064-aad85906cad1",
                            "date": "08-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 18,
                            "vaccine": "COVAXIN",
                            "slots": [
                              "10:00AM-11:00AM",
                              "11:00AM-12:00PM",
                              "12:00PM-01:00PM",
                              "01:00PM-02:00PM"
                            ]
                          }
                        ]
                      },
                      {
                        "center_id": 99761,
                        "name": "Ketetong PHC (COVISHIELD)",
                        "address": "Ketetong BPHC",
                        "state_name": "Assam",
                        "district_name": "Tinsukia",
                        "block_name": "Ketetong Block",
                        "pincode": 786181,
                        "lat": 27,
                        "long": 95,
                        "from": "10:00:00",
                        "to": "17:00:00",
                        "fee_type": "Free",
                        "sessions": [
                          {
                            "session_id": "601aedd7-b0ae-4a6e-98e3-b2e579280b24",
                            "date": "08-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          }
                        ]
                      },
                      {
                        "center_id": 642776,
                        "name": "Telikola HWC",
                        "address": "Telikola SC",
                        "state_name": "Assam",
                        "district_name": "Tinsukia",
                        "block_name": "Na-Sadiya Block",
                        "pincode": 786158,
                        "lat": 27,
                        "long": 95,
                        "from": "09:00:00",
                        "to": "17:00:00",
                        "fee_type": "Free",
                        "sessions": [
                          {
                            "session_id": "69c2d44e-fe83-4edd-ab5b-3a020cd36dd9",
                            "date": "08-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "09:00AM-11:00AM",
                              "11:00AM-01:00PM",
                              "01:00PM-03:00PM",
                              "03:00PM-05:00PM"
                            ]
                          }
                        ]
                      },{
                        "center_id": 583466,
                        "name": "Bandarkhati MPHC",
                        "address": "Bandarkhati",
                        "state_name": "Assam",
                        "district_name": "Tinsukia",
                        "block_name": "Hapjan Block",
                        "pincode": 786170,
                        "lat": 27,
                        "long": 95,
                        "from": "10:00:00",
                        "to": "17:00:00",
                        "fee_type": "Free",
                        "sessions": [
                          {
                            "session_id": "807bb767-fadc-4b82-af67-fec914a7f37c",
                            "date": "08-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          },
                          {
                            "session_id": "5948fee8-7e8e-428d-9a76-a2048b0c2415",
                            "date": "10-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          },
                          {
                            "session_id": "7621b339-2642-4e6d-b46b-9813b0c950d8",
                            "date": "11-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          },
                          {
                            "session_id": "a03e887b-93d3-4bae-92ad-67d58a24a966",
                            "date": "13-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          },
                          {
                            "session_id": "4a1bf532-9f10-4029-baa0-a47b5ab97eb8",
                            "date": "14-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          },{
                            "session_id": "4a1bf5344-9f10-4029-baa0-a47b5ab97eb8",
                            "date": "15-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          },{
                            "session_id": "4a1bf5366-9f10-4029-baa0-a47b5ab97eb8",
                            "date": "16-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "10:00AM-12:00PM",
                              "12:00PM-02:00PM",
                              "02:00PM-04:00PM",
                              "04:00PM-05:00PM"
                            ]
                          }
                        ]
                      },
                      {
                        "center_id": 661366,
                        "name": "Anandabag T.E. Hospital",
                        "address": "Anandabag T.E. Hospital",
                        "state_name": "Assam",
                        "district_name": "Tinsukia",
                        "block_name": "Hapjan Block",
                        "pincode": 786170,
                        "lat": 0,
                        "long": 0,
                        "from": "09:00:00",
                        "to": "17:00:00",
                        "fee_type": "Free",
                        "sessions": [
                          {
                            "session_id": "ea63d22b-bb72-4671-ac6c-da9e1926fc6e",
                            "date": "08-05-2021",
                            "available_capacity": 0,
                            "min_age_limit": 45,
                            "vaccine": "COVISHIELD",
                            "slots": [
                              "09:00AM-11:00AM",
                              "11:00AM-01:00PM",
                              "01:00PM-03:00PM",
                              "03:00PM-05:00PM"
                            ]
                          }
                        ]
                      }
                ]
              }`;
              resjson = JSON.parse(resjsonStr);

        }else{
            
            // let currentDate = selecteddate.toString;


            const res = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${selectedDistrict}&date=${selecteddate}`, {
                method: 'GET'
              });
            resjson = await res.json();
        }
        // let responseHtml = document.querySelector('.response');
        // if(resjson){
        //     responseHtml.innerHTML = 'success appt retrieved'+JSON.stringify(resjson);
        // }else{
        //     responseHtml.innerHTML = 'failed';
        // }
        // bgLoaderAppt.classList.toggle('hide');
        const appointmentsList = document.querySelector('.appointments-list');
        while (appointmentsList.firstChild) {
          appointmentsList.removeChild(appointmentsList.lastChild);
        }
        // console.log(appointmentsList);
        // if(appointmentsList['appointment-card-container']){
        //   console.log(appointmentsList);
        //   appointmentsList['appointment-card-container'].length=0;
        // }

        //appointmentsList['appointment-card-container'].length=0;
        resjson.centers.forEach(center => {
            const el = document.createElement('appointment-card-container');
            el.center = center;
            appointmentsList.appendChild(el);
        });

    
        console.log('ok');
    }catch(err){
        let responseHtml = document.querySelector('.response');
        console.log('error ...',err);
        responseHtml.innerHTML = err;
    }

}



