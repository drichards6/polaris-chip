import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

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