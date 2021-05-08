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
                
                <h3 class="available-capacity" style="color:#DD4B3E;">${sessionItem.available_capacity} slots</h3>
                <h3 class="min-age-limit" style="color:purple;">${sessionItem.min_age_limit}+ age</h3>
                <h3 class="vaccine-name"><i class="fas fa-prescription-bottle-alt" style="color:red; margin-right: 2px;"></i>${sessionItem.vaccine}</h3>                                
            </div>

            <div class="session-slots">
                
            </div>
        </div>`;
    }

    
}


customElements.define('session-item', sessionItem);