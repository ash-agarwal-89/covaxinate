class appointmentCardContainer extends HTMLElement{

    set center(center){
        // console.log('center----', JSON.stringify(center.sessions) ,center);
        // let sessions = ;
        
        
        let newsessions = {};
        newsessions.name = center.name.replaceAll(" ","_");
        let addressString = center.address+', '+center.block_name+' - '+center.pincode
        newsessions.address = addressString.replaceAll(" ","_");
        newsessions.sessions = center.sessions;
        // console.log('sessions.. ',sessions);
        // console.log('newsessions.. ',newsessions);
        let stringSession = JSON.stringify(newsessions)
        console.log('JSON.stringify(sessions).. ',stringSession);
        console.log('JSON.parse(sessions).. ',JSON.parse(stringSession));

        this.innerHTML = `
        <div class="appointment-card" data-id=${center.center_id} data-sessions=${JSON.stringify(newsessions)}>
            <div class="appointment-venue-details">
                <h3 class="hospital-name">${center.name}</h3>
                <div class="venue-address-container">
                    <span><i class="fas fa-map-marker-alt"></i></span>
                    <span class="hospital-address">${center.address},</span>
                    <span class="block-name">${center.block_name} - </span>
                    <span class="pin-code">${center.pincode}</span>
                </div>
                <div class="vaccine-details">
                    <span><img src="./imgs/icons8-syringe-100.png" alt="" class="syrige-mg"/>
                    </span><span class="fee-type">${center.fee_type}</span>
                </div>
                <div class="clock">
                    <span><i class="fas fa-clock"></i></span> 
                    <span class="session-duration">${center.from} - ${center.to}</span>
                </div>
            </div>

            <div class="slots">
                <div class="show-session">
                    <span>Show Sessions</span>
                </div>
            </div>
        </div>`;
    }

    
}


customElements.define('appointment-card-container', appointmentCardContainer);