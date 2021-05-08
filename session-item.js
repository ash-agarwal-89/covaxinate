class sessionItem extends HTMLElement{

    set sessionItem(sessionItem){
        console.log('sessionItem----',sessionItem);
        // let sessionJson = JSON.parse(sessions);

        // let sessionVenueName = sessionJson.name.replaceAll("_"," ");
        // let sessionVenueAddress = sessionJson.address.replaceAll("_"," ");

        this.innerHTML = `
        <div class="sesion-card" id="${sessionItem.session_id}">
            <h3 class="session-date">${sessionItem.date}</h3>
            <div class="session-details">
                
                <h3 class="available-capacity">${sessionItem.available_capacity}</h3>
                <h3 class="min-age-limit">${sessionItem.min_age_limit}</h3>
                <h3 class="vaccine-name">${sessionItem.vaccine}</h3>                                
            </div>

            <div class="session-slots">
                
            </div>
        </div>`;
    }

    
}


customElements.define('session-item', sessionItem);