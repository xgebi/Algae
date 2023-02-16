import { Host, h } from '@stencil/core';
import { ButtonVariant } from './ButtonVariant';
export class AlButton {
  constructor() {
    this.variant = ButtonVariant.default;
  }
  render() {
    return (h(Host, null, h("button", { class: {
        'light': this.variant === ButtonVariant.light
      } }, h("slot", null))));
  }
  static get is() { return "al-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["al-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["al-button.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "ButtonVariant.default"
      }
    };
  }
}
//# sourceMappingURL=al-button.js.map
