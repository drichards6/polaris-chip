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
    this.myTitle = "My card";
    this.img = "#";
    this.description = "Details";
    this.link = "#";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) .card {
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
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

      details summary {
      text-align: left;
      font-size: 20px;
      padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
  
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }

    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
        <div class="card">
            <h1 class="card-title">${this.myTitle}</h1>
            <img class="card-image" src="${this.img}">
            <details ?open="${this.fancy}" @toggle="${this.openChanged}">
              <summary>Description</summary>
              <div>
                <slot>${this.description}</slot>
              </div>
            </details>
            <a href="${this.link}" rel="noopener noreferrer">
              <button class="button">Details</button>
            </a>
        </div>  
    `; 
  }


  static get properties() {
    return {
      myTitle: { type: String, attribute: "my-title" },
      img: { tpe: String },
      description: { tpe: String },
      link: { tpe: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
