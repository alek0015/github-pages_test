class HeaderLS extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="d-flex align-items-center">
          <a class="navbar-brand d-flex align-items-left" href="/index.html"> <!-- Link back to Landing Page -->
            <img src="/src/assets/bb_monke.png" alt="BoulderBud logo" width=65 height=65 class="me-3"/> 
            <span id="boulderbud" style="margin-top: 6%;"><h2>BoulderBud</h2></span>
          </a>
        </div>
        `;
    }
}

customElements.define('header-left-side', HeaderLS);