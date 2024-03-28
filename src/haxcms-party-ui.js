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
      }

      .top-input-section-container {
        width: 100%;
        position: relative;
        margin-bottom: 30px;
      }

      .add-user-text {
        margin: 0 var(--ddd-spacing-2);
        color: var(--ddd-theme-default-original87Pink);
        font-size: 20px;
      }

      .user-input {
        margin: 0 var(--ddd-spacing-2);
      }

      .save-button {
        margin: var(--ddd-spacing-2);
      }

      .scroll-section {
        display: flex;
      }

    `];
  }

  processUserInput(e) {
    const inputValue = e.target.value;
    // Remove any characters that are not lowercase letters or numbers (took logic from emirahanna after class discussion)
    const sanitizedValue = inputValue.replace(/[^a-z0-9]/g, "");
    e.target.value = sanitizedValue.slice(0, 10);
  }

  addUser(e) {
      const randNum = globalThis.crypto.getRandomValues(new Uint32Array(1))[0];

      const user = {
        id: randNum,
        name: this.item,
      }

      console.log(user);
      this.users.push(user);
      this.requestUpdate();
      console.log(this.users);
  }

targetClicked(e) {
  console.log(e.target);
  console.log(e.target.closest('div'));
  console.log(e.target.closest('div').getAttribute('data-id'));
  this.shadowRoot.querySelectorAll('div').forEach((item) => {
    if (item === e.target.closest('div')) {
      console.log(item);
      console.log('found item clicked')
    }

    const index = this.items.findIndex((item) => {
    return item.id === parseInt(e.target.closest('div').getAttribute('data-id'));
    });
    console.log(index);
  });
}

  render() {
    return html `
      <div class="haxcms-party-ui-container">
        <div class="top-input-section-container">
          <div class="add-user-text">
            Add User:
          </div>
          <input type="text" class="user-input" placeholder="Type Username Here">
          <button class="add-button" @click="${this.addUser}">Add</button>
        </div>  

        <div class="bottom-section">
          <div class="scroll-section">
            <div class="character-container">
              <rpg-character seed=${this.item}></rpg-character>
            </div>
          </div>
          <button class="save-button">Save Users</button>
        </div>
      </div>

    `;
  }

  static get properties() {
    return {
      ...super.properties,
      myItems: { type: Array, attribute:"my-items" },
      item: { type: String, },
    }
  }

}

globalThis.customElements.define(HaxcmsPartyUI.tag, HaxcmsPartyUI);