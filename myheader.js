class MyHeader extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <header class="header">
            <a href="/index.html" class="header_anchor">
                <img src="../imgs/vaccine.png" alt="brand" class="brand_image">
                <span class="brand_name">covaxinate</span>
            </a>
        </header>`;
    }

    
}


customElements.define('my-header', MyHeader);