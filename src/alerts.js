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
      this.msg = "This is a warning. Exercise caution.";
      this.date = "August 22, 2024";
      this.time = "3:00 PM";
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

        .sticky {
          position: sticky;
          top: 0;
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

        .alert-icon {
            transform: skew(-20deg) scale(1.25); 
            margin-left: 4vw;
            flex: 0 0 auto;
        }

        .datetime {
            text-align: left;
            margin-left: 6vw;
            margin-right: 6vw;
            font-weight: 600;
            font-size: 90%;
            text-transform: uppercase;
        }    

        .triangle {
            border-style: solid;
            border-width: 0 50px 50px;
            width: 0;
            height: 0;
            position: absolute;
            bottom: 2rem;
            left: -2rem;
            border-left: 35px solid transparent;
            border-right: 0px solid transparent;
            color: var(--message-background-color);
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

  openedAlert() {
    return html`
      <div class="outside-wrapper"> 
        <slot>
          <div class='datetime'>
            <p class='date'>${this.date}</p>
            <p class='time'>${this.time}</p>
          </div>
        <div class="middle-wrapper"> 
          <!-- icon, paragraph, triangle wedge-->
          <svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" style="height: 90px; width: 90px; align-items: center;" viewBox="0 0 24 24"><title>alert-circle-outline</title><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/></svg>
          <p class="msg-text"></p>
          <div class="triangle">${this.msg}</div>
        </div>
        <div class='btn-wrapper'>
          <button class="btn" @click="${this.toggleAlert}"></button>
        </div>
      </slot>
      </div>

    `;
  }

  closedAlert() {
    return html`


    `;
  }

  render() {
      return (this.openedAlert());
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