import {describe, test, expect} from 'vitest';
import {setup, $fetch} from '@nuxt/test-utils/e2e';

describe('Layouts', async () => {
  await setup({
    rootDir: 'layouts'
  })

  test('Renders a Home Layout', async () => {
    const home = await $fetch('/');
  
    expect(home).toContain('Miles');
    expect(home).toContain('© 2024 Miles™ All Rights Reserved.');
    expect(home).toContain('About');
    expect(home).toContain('FAQ');
    expect(home).toContain('Privacy Policy');
    expect(home).toContain('Contact');

    expect(home).not.toContain('RESOURCES');
    expect(home).not.toContain('About us');

    expect(home).not.toContain('GET IN TOUCH');
    expect(home).not.toContain('Contact us');
    expect(home).not.toContain('Work with us');

    expect(home).not.toContain('LEGAL');
    expect(home).not.toContain('Terms & Conditions');
  });
})