import { test, expect } from '@playwright/test';

test('checkUp-certmgr-chrome', async ({ page }) => {
  await page.goto('chrome://certificate-manager/localcerts/platformcerts');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'certmgr-chrome.png', fullPage: true });
});
