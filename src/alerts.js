import { LitElement, html, css } from 'lit';

export class Alerts extends LitElement {

  static get tag() {
      return 'alerts-app';
  }
  
  constructor() {
      super();
      this.sticky = false;
      this.urgency = "warning"
    } 
  
  static get styles() {
      return css`
        :host {
          display: block;
          width: 100%;
          height: 128px;
          background-color: grey;
        }

        :host([sticky]) {
            // do something 
        }

        :host([urgency="notice"]) {
            background-color: lightblue; //make this assign the variable color, not change the background color
        }

        :host([urgency="warning"]) {
            background-color: yellow;
        }

        :host([urgency="alert"]) {
            background-color: red;
        }

      `;
    }

    
  render() {
      return html`
        <div class="alert"> 
            <h1>Alert</h1>
        </div>
      `; 
    }
  
  static get properties() {
      return {
        sticky: { type: Boolean, reflect: true },
        urgency: { type: String },

      };
    }
}
  
globalThis.customElements.define(Alerts.tag, Alerts);