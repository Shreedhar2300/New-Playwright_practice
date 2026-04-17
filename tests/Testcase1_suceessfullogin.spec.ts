import {test } from '../Pages/fixtures/baseFixture';
import { expect } from '@playwright/test';


test('successful login @smoke',async({pm})=>{
await pm.userlogin().Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(pm.userlogin().page.getByRole("heading",{name:"Login"})).toBeVisible({timeout:10000});
await pm.userlogin().Userlogin("Admin","admin123");
await expect(pm.userlogin().page.getByRole("heading",{name:"Dashboard"})).toBeVisible({timeout:10000});
});