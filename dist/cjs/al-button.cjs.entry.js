'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4829461f.js');

var ButtonVariant;
(function (ButtonVariant) {
  ButtonVariant["light"] = "light";
  ButtonVariant["default"] = "default";
})(ButtonVariant || (ButtonVariant = {}));

const alButtonCss = ":host{display:block}button{background:var(--primary);color:var(--white);padding:1rem 1.5rem;border:0}button.light{background:var(--secondary);color:var(--black)}";

const AlButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = ButtonVariant.default;
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { class: {
        'light': this.variant === ButtonVariant.light
      } }, index.h("slot", null))));
  }
};
AlButton.style = alButtonCss;

exports.al_button = AlButton;

//# sourceMappingURL=al-button.cjs.entry.js.map