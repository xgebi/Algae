import type { Components, JSX } from "../types/components";

interface AlButton extends Components.AlButton, HTMLElement {}
export const AlButton: {
  prototype: AlButton;
  new (): AlButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
