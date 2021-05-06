
console.log('app starting...')

let readBtn = document.querySelector('.viewmore-btn');
let appointBtn = document.getElementById('getstarteButton');
let contents = document.querySelector('.content-text');


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

        const res = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`, {
            method: 'GET'
          });
        const resjson = await res.json();
        let responseHtml = document.querySelector('.response');
        if(resjson){
            responseHtml.innerHTML = 'success states retrieved';
        }else{
            responseHtml.innerHTML = 'failed';
        }
        const stateList = document.getElementById('state');
       // console.log(typeOf(resjson));
        responseHtml.innerHTML = resjson.states;
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