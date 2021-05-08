class showSessions extends HTMLElement{

    set sessions(sessions){
        console.log('center----',JSON.parse(sessions));
        let sessionJson = JSON.parse(sessions);

        let sessionVenueName = sessionJson.name.replaceAll("_"," ");
        let sessionVenueAddress = sessionJson.address.replaceAll("_"," ");

        this.innerHTML = `
        <div class="session-modal">
                <button id="close-btn" class="close-btn"><i class="fas fa-times"></i></button>
                <div class="session-data">
                    <h3 class="hospital-name">${sessionVenueName}</h3>
                    <div class="venue-address-container">
                        <span><i class="fas fa-map-marker-alt"></i></span>
                        <span class="hospital-address">${sessionVenueAddress}</span>
                    </div>
                    

                </div>
            </div>`;
    }

    
}


customElements.define('session-modal', showSessions);