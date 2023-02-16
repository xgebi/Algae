import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

var ButtonVariant;
(function (ButtonVariant) {
  ButtonVariant["light"] = "light";
  ButtonVariant["default"] = "default";
})(ButtonVariant || (ButtonVariant = {}));

const alButtonCss = ":host{display:block}button{background:var(--primary);color:var(--white);padding:1rem 1.5rem;border:0}button.light{background:var(--secondary);color:var(--black)}";

const AlButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.variant = ButtonVariant.default;
  }
  render() {
    return (h(Host, null, h("button", { class: {
        'light': this.variant === ButtonVariant.light
      } }, h("slot", null))));
  }
  static get style() { return alButtonCss; }
}, [1, "al-button", {
    "variant": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["al-button"];
  components.forEach(tagName => { switch (tagName) {
    case "al-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AlButton$1);
      }
      break;
  } });
}

const AlButton = AlButton$1;
const defineCustomElement = defineCustomElement$1;

export { AlButton, defineCustomElement };

//# sourceMappingURL=al-button.js.map