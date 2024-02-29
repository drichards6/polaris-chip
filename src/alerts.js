import { LitElement, html, css } from 'lit';

export class Alerts extends LitElement {

  static get tag() {
      return 'alerts-app';
  }
  
  constructor() {
      super();
      this.sticky = false;
      this.status = "warning"
      this.opened = true;
      if (localStorage.getItem('campus-alert-opened-state') == 'false') {
        this.opened = false;
      }
      this.msg = "This is a warning. Exercise caution."
      this.date = "August 22, 2024"
    } 
  
  static get styles() {
      return css`
        :host {
          display: flex;
          width: 100%;
          height: 128px;
        }

        :host([status="notice"]) {
            --outsidebgcolor: blue;
            --insidebgcolor: #5b99e5;
        }

        :host([status="warning"]) {
            --outsidebgcolor: yellow;
            --insidebgcolor: #e1bc29;
        }

        :host([status="alert"]) {
            --outsidebgcolor: red;
            --insidebgcolor: #a70303;
        }

        .outside-wrapper {
          display: flex;
          background-color: var(--outsidebgcolor);
          height: 100%;
          width: 100%;
          align-items: center;
          justify-content: center;
          position: relative;
        }   

        button {
          max-height: 24px;
          position: absolute;
          top: 10%;
          right: 20%;
          background-color: white; 
        }

        .middle-wrapper {
          transform: skew(20deg);
          display: flex;
          background-color: var(--insidebgcolor);
          height: 100%;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
        }

        .text-wrapper {
          transform: skew(-20deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

      `;
    }

  toggleAlert() {
    this.opened = !this.opened;
  }

  render() {
      return html`
        <div class="outside-wrapper"> 
          <div class="middle-wrapper"> 
            <p class="text-wrapper">This is a larger alert message.</p>
          </div>  
            <button>x</button>
        </div>

      `; 
    }
  
  static get properties() {
      return {
        sticky: { type: Boolean, reflect: true },
        status: { type: String, reflect: true },
        opened: { type: Boolean, reflect: true},
        msg: { type: String },
      };
    }
}
  
globalThis.customElements.define(Alerts.tag, Alerts);