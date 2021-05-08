class appointmentCardContainer extends HTMLElement{

    set center(center){
        console.log('center----',center);
        this.innerHTML = `
        <div class="appointment-card">
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
                <h4 class="session-duration">${center.from} : ${center.to}</h4>
                <h4 class="pin-code">${center.pincode}</h4>
            </div>

            <div class="slots">
                <a href="#">Show details</a>
            </div>
        </div>`;
    }

    
}


customElements.define('appointment-card-container', appointmentCardContainer);