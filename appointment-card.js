class appointmentCardContainer extends HTMLElement{

    set center(center){
        console.log('center----',center);
        this.innerHTML = `
        <div class="appointment-card">
            <div class="appointment-venue-details">
                <h3 class="hospital-name">${center.name}</h3>
                <h4 class="hospital-address">${center.address}</h4>
                <h4 class="block-name">${center.block_name}</h4>
                <h4 class="pin-code">${center.pincode}</h4>
                <h4 class="fee-type">${center.fee_type}</h4>
                <h4 class="session-duration">${center.from} : ${center.to}</h4>
                <h4 class="pin-code">${center.pincode}</h4>
            </div>

            <div class="slots">
                show
            </div>
        </div>`;
    }

    
}


customElements.define('appointment-card-container', appointmentCardContainer);