import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
      return 'counter-app';
  }
  
  constructor() {
      super();
      this.myTitle = "Count";
      this.min = 0;
      this.max = 50;
      this.num = 5;
    } 
  
  static get styles() {
      return css`
        :host {
          display: block;
        }

        :host([num="18"]) .numText {
            color: fuchsia;
        }

        :host([num="21"]) .numText {
            color: green;
        }

        :host([num="0"]) .numText {
            color: yellow;
        }

        :host([num="50"]) .numText {
            color: red;
        }

        .counter {
            background-color: navy;
            color: white;
            border: 8px solid grey;
            padding: 8px;
            text-align: center;
            max-width: 300px;
        }

        .numText {
            font-size: 50px;
        }

        button {
            font-size: 50px;
            width: 75px;
        }

      `;
    }

    minus() {
        if (this.num > this.min) {
            this.num--;
        }
    }

    plus() {
        if (this.num < this.max) {
            this.num++;
        }
    }
  
  render() {
      return html`
        
        <div class="counter">
            <h1 class="title-text">${this.myTitle}</h1>
            <p class="numText">${this.num}</p>
            <button class="minus" @click="${this.minus}">-</button>
            <button class="plus" @click="${this.plus}">+</button>
        </div>

      `; 
    }
  
  static get properties() {
      return {
        myTitle: { type: String, attribute: "my-title" },
        min: { type: Number, reflect: true },
        max: { type: Number, reflect: true },
        num: { type: Number, reflect: true },
      };
    }
}
  
globalThis.customElements.define(CounterApp.tag, CounterApp);