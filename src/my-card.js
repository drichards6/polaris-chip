import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. Get HTML working
 * 2. Get CSS working
 */

/**
 * Properties to add:
 * 1. Body
 * 2. Img
 * 3. Button text
 * 4. Button link --> change to an actual address, not just hax.psu.edu
 * 5. Title
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.img = "#";
    this.details = "#";
    this.link = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card.change-color {
  background-color: var(--basic-color);
}

.card {
  background-color: #D4EFFD;
  color: Black;
  max-width: 400px;
  text-align: center;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  font-size: 40px;
}

.card-image {
  width: 350px;
  height: auto;
}

.card-details {
  font-size: 30px;
  font-family: serif;
}

.button {
  color: white;
  background-color: Black;
  margin: 2px 2px 8px 2px;
  padding: 5px 20px ;
  border-radius: 15%;
  font-size: 25px;
}

.button:focus,
.button:hover {
  background-color: green;
  color: white;
}


    `;
  }

  render() {
    return html`
      <div id="cardlist">
        <div class="card">
            <h1 class="card-title">${this.title}</h1>
            <img class="card-image" src="${this.img}">
            <p class="card-details">${this.details}</p>
            <a href="${this.link}" rel="noopener noreferrer">
              <button class="button">Details</button>
            </a>
        </div>  
      </div>
    `; 
  }

  static get properties() {
    return {
      title: { type: String },
      img: { tpe: String },
      details: { tpe: String },
      link: { tpe: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
