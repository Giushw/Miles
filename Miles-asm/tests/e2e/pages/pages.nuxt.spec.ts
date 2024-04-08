import {describe, test, expect} from 'vitest';
import {setup, $fetch} from '@nuxt/test-utils/e2e';

describe('Pages', async () => {
  await setup({
    rootDir: 'pages'
  })

  test.skip('Renders a Index page with correct text', async () => {
    const home = await $fetch('/');
  
    expect(home).toContain('Full Speed Ahead!');
  });

  test('Renders a About page with correct text', async () => {
    const about = await $fetch('/about');
  
    expect(about).toContain('About');
  });

  test('Renders a Contact page with correct text', async () => {
    const contact = await $fetch('/contact');
  
    expect(contact).toContain('Contact Us');
  });

  test('Renders a FAQ page with correct text', async () => {
    const faq = await $fetch('/faq');
  
    expect(faq).toContain('FAQ');
  });

  test('Renders a Job page with correct text', async () => {
    const job = await $fetch('/job');
  
    expect(job).toContain('Job');
  });

  test('Renders a Legal page with correct text', async () => {
    const legal = await $fetch('/legal');
  
    expect(legal).toContain('Legal');
  });

  test('Renders a Privacy page with correct text', async () => {
    const privacy = await $fetch('/privacy');
  
    expect(privacy).toContain('Privacy Policy');
  });

  // Booking
  // Travel
})