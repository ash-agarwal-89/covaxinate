
console.log('vaccine...')

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


// appointBtn.onclick = function(){

// console.log('oooo');
// }


async function fetchStates(){
    const res = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
    const json = await res.json;

    const stateList = document.getElementById('state');
    json.states.forEach(state => {

        myOption = document.createElement("option");
        myOption.text = state_name;
        myOption.value = state_name;
        daySelect.appendChild(myOption);
    });

}