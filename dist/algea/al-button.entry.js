import { r as registerInstance, h, e as Host } from './index-17c21851.js';

var ButtonVariant;
(function (ButtonVariant) {
  ButtonVariant["light"] = "light";
  ButtonVariant["default"] = "default";
})(ButtonVariant || (ButtonVariant = {}));

const alButtonCss = ":host{display:block}button{background:var(--primary);color:var(--white);padding:1rem 1.5rem;border:0}button.light{background:var(--secondary);color:var(--black)}";

const AlButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = ButtonVariant.default;
  }
  render() {
    return (h(Host, null, h("button", { class: {
        'light': this.variant === ButtonVariant.light
      } }, h("slot", null))));
  }
};
AlButton.style = alButtonCss;

export { AlButton as al_button };

//# sourceMappingURL=al-button.entry.js.map