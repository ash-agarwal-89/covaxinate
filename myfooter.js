class MyFooter extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
            <div class="footer-items">
                <ul class="footer-social-list">
                    <li><a href="#" class="terms-of-use"><i class="fas fa-envelope gmail"></i> mail us</a></li>
                    <li><a href="#" class="feedback"><i class="fab fa-facebook facebook"></i> follow us</a></li>
                    <li><a href="#" class="terms-of-use"><i class="fab fa-twitter tweet"></i> tweet us</a></li>
                    <li><a href="https://m.youtube.com/channel/UC3paSZA513norLu3b1sEOmA/featured"><i class="fab fa-youtube utube"></i> subscribe</a></li>
                </ul>
                <span class="powered-by">Powered by API Setu</span>
            </div>
        </footer>`;
    }

    
}


customElements.define('my-footer', MyFooter);