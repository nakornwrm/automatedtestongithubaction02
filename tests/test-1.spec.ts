import { test, expect } from '@playwright/test';
var fs = require('fs');

test('Test search at Google', async ({ page }) => {
  var dir = './imagesresult';
  
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  await page.goto('https://www.google.com/');
  await expect(page).toHaveURL('https://www.google.com/');
  await page.screenshot({ path: dir+'/01.png', fullPage: true });
  await page.getByRole('combobox', { name: 'ค้นหา' }).click();
  await page.getByRole('combobox', { name: 'ค้นหา' }).fill('tonproject');
  await page.screenshot({ path: dir+'/02.png', fullPage: true });
  await page.getByRole('combobox', { name: 'ค้นหา' }).press('Enter');
  await page.screenshot({ path: dir+'/03.png', fullPage: true });
});