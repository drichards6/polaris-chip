import { LitElement, html, css } from 'lit';

export class Alerts extends LitElement {

  static get tag() {
      return 'alerts-app';
  }
  
  constructor() {
      super();
      this.sticky = false;
      this.status = "warning";
      this.opened = true;
      if (localStorage.getItem('campus-alert-opened-state') === 'closed') {
        this.opened = false;
        this.style.setProperty('--custom-alert-height', '48px');
      }
      this.msg = "This is a warning. Exercise caution."
      this.date = "August 22, 2024"
    } 
  
  static get styles() {
      return css`
        :host {
          display: flex;
          width: 100%;
        }

        :host([open]) .outside-wrapper {
        max-height: var(--custom-alert-height);
      }

        :host([sticky]) {
          position: sticky;
          top: 0;
          z-index: 99999;
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
          height: var(--custom-alert-height, 100px);
          width: 100%;
          align-items: center;
          justify-content: center;
          position: relative;
        }   

        .closed .outside-wrapper {
          height: var(--custom-alert-closed-height, var(--custom-alert-height, 48px));
        }

        .btn {
          max-height: 24px;
          position: absolute;
          top: 20%;
          right: 5%;
          background-color: white; 
        }

        .middle-wrapper {
          transform: skew(20deg);
          display: flex;
          background-color: var(--insidebgcolor);
          height: 100%;
          align-items: center;
          justify-content: center;
          padding: 0 48px;
        }

        .text-wrapper {
          transform: skew(-20deg);
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 540px;
        }

      `;
    }

  toggleAlert() {
    this.opened = !this.opened;

    if (!this.opened) {
      this.style.setProperty('--custom-alert-height', '50px');
      localStorage.setItem('campus-alert-opened-state', 'closed');
    } 
    else {
      this.style.removeProperty('--custom-alert-height');
      localStorage.removeItem('campus-alert-opened-state');
    }

  }

  render() {
      return html`
        <div class="outside-wrapper ${this.open ? '' : 'closed'}" ?sticky="${this.sticky}"> 
          <div class="middle-wrapper"> 
            <div class="text-wrapper"><p><slot name="title"></slot></p>
            ${this.open ? html`<slot></slot>` : ''}</div>
          </div>  
            <button class="btn" @click="${this.toggleAlert}">
              ${this.open ? 'Close' : 'Open'} 
            </button>
        </div>

      `; 
    }
  
  static get properties() {
      return {
        sticky: { type: Boolean, reflect: true },
        status: { type: String, reflect: true },
        opened: { type: Boolean, reflect: true},
        date: { type: String },
        msg: { type: String },
      };
    }
}
  
globalThis.customElements.define(Alerts.tag, Alerts);