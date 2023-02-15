import { newE2EPage } from '@stencil/core/testing';

describe('al-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<al-button></al-button>');

    const element = await page.find('al-button');
    expect(element).toHaveClass('hydrated');
  });
});
