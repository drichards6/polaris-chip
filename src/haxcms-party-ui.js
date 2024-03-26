import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUI extends DDD {
  
  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
    this.myItems = ["drr5489", "ref1000", "dog250"];
  }
  
  static get styles() {
    return [
      super.styles,
      css`
      :host {
        display: block;
      }

      .haxcms-party-ui-container {
        margin: var(--ddd-spacing-2) var(--ddd-spacing-0);
        background-color: var(--ddd-theme-default-creekTeal);
        height: var(--ddd-spacing-30);
      }

      .top-input-section-container {
        background-color: var(--ddd-theme-default-creekLight);
        width: 80%;
        position: relative;
        margin-bottom: 30px;
      }

      .add-user-text {
        color: var(--ddd-theme-default-landgrantBrown);
        font-size: 20px;
      }

    `];
  }

  processUserInput(e) {
    const inputValue = e.target.value;
    // Remove any characters that are not lowercase letters or numbers (took from emirahanna after class discussion)
    const sanitizedValue = inputValue.replace(/[^a-z0-9]/g, "");
    e.target.value = sanitizedValue.slice(0, 10);
  }

  render() {
    return html `
      <div class="haxcms-party-ui-container">
        <div class="top-input-section-container"></div>
          <div class="add-user-text">
            Add User:
          </div>
          <input type="text" class="user-input" placeholder="Username">
          <button class="add-button">Add</button>
        </div>
      <div class="bottom-characters-section"></div>
        <div class="scroll-section"></div>
      </div>
        

    `;
  }

  static get properties() {
    return {
      // ...super.properties,
      myItems: { type: Array, attribute:"my-items" },
      item: { type: String, },
    }
  }

}

globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);