import { newSpecPage } from '@stencil/core/testing';
import { AlButton } from '../al-button';

describe('al-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AlButton],
      html: `<al-button></al-button>`,
    });
    expect(page.root).toEqualHtml(`
      <al-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </al-button>
    `);
  });
});
