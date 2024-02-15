import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
      return 'counter-app';
  }
  
  constructor() {
      super();
      this.myTitle = "Counter App";
      this.img = "#";
    } 
  
  static get styles() {
      return css`
        :host {
          display: block;
        }

        .counter {
            background-color: navy;
            color: white;
            border: 2px solid grey;
            padding: 8px;
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
        
        <div class="counter">
            <h2 class="title-text">${my-title}</h2>
            <p>19</p>
        </div>

      `; 
    }
  
  
  static get properties() {
      return {
        myTitle: { type: String, attribute: "my-title" },
        img: { tpe: String },
      };
    }
}
  
globalThis.customElements.define(CounterApp.tag, CounterApp);