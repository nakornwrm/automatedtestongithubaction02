import { test, expect } from '@playwright/test';

test('Test login Identity Server Demo', async ({ page }) => {
  var fs = require('fs');
  var dir = './imagesresult';  
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  await page.goto('https://demo.identityserver.com/');
  await expect(page).toHaveURL('https://demo.identityserver.com/');
  await page.screenshot({ path: dir+'/01.png', fullPage: true });
  await page.getByRole('link', { name: 'here' }).click();
  await expect(page).toHaveURL('https://demo.identityserver.com/Account/Login?ReturnUrl=%2Fgrants');
  await page.screenshot({ path: dir+'/02.png', fullPage: true });
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('bob');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('bob');
  await page.screenshot({ path: dir+'/03.png', fullPage: true });
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://demo.identityserver.com/grants');
  await page.screenshot({ path: dir+'/04.png', fullPage: true });
});