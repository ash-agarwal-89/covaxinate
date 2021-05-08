class appointmentCardContainer extends HTMLElement{

    set center(center){
        console.log('center----', JSON.stringify(center.sessions) ,center);
        let sessions = center.sessions;
        let sessionId = sessions;
        let sessionArray = [];
        sessions.forEach(session => {
            console.log('session id...  ',session.session_id);
            sessionArray.push(session.session_id);

        });

        this.innerHTML = `
        <div class="appointment-card" data-id=${center.center_id} data-sessions=${JSON.stringify(center.sessions)}>
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