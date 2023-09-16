import {test, expect} from '@playwright/test';

const {describe} = test;


describe('home page', () => {
  test('can open home page and go to links', async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    page.getByRole('paragraph', {name: 'Get started by editing'});

    await page.getByRole('link', { name: 'Docs' }).click();
    await page.getByRole('link', { name: 'Learn' }).click();
    await page.getByRole('link', { name: 'Templates' }).click();
    await page.getByRole('link', { name: 'Deploy' }).click();
  });
});
