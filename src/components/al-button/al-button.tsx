import { Component, Host, h, Prop } from '@stencil/core';
import { ButtonVariant } from './ButtonVariant';

@Component({
  tag: 'al-button',
  styleUrl: 'al-button.css',
  shadow: true,
})
export class AlButton {
  @Prop() variant: string = ButtonVariant.default;

  render() {
    return (
      <Host>
        <button class={{
          'light': this.variant === ButtonVariant.light
        }}><slot></slot></button>
      </Host>
    );
  }

}
