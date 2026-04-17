import{Page,Locator} from '@playwright/test'

export class Header{
    readonly page:Page;
    readonly upgradebutton:Locator;
    readonly profilebutton:Locator;
    readonly helpicon:Locator;
    readonly aboutoption:Locator;
    readonly supportoption:Locator;
    readonly changepasswordoption:Locator;
    readonly logoutoption:Locator;

    constructor(page:Page,)
    {
      this.page=page;
      this.upgradebutton=page.getByRole("button",{name:"Upgrade"});
      this.profilebutton=page.locator(".oxd-userdropdown-tab");
      this.helpicon=page.locator('button[title="Help"]');
      this.aboutoption=page.getByRole("menuitem",{name:"About"})
      this.supportoption=page.getByRole("menuitem",{name:"Support"})
      this.changepasswordoption=page.getByRole("menuitem",{name:"Change Password"})
      this.logoutoption=page.getByRole("menuitem",{name:"Logout"})
    }

    async upgradeandswitchtab()
    {
        const [newPage]=await Promise.all([this.page.context().waitForEvent('page'), this.upgradebutton.click()]);
        await newPage.waitForLoadState();
        return newPage;
    }

    async profile()
    {
        await this.profilebutton.click();
        return this;
    }

    async helpicon1()
    {
       await this.helpicon.click();
    }

    async clickabout()
    {
       await this.aboutoption.click();
    }
    async clicksupport()
    {
        await this.supportoption.click();
    }
    async clickchangepassword()
    {
        await this.changepasswordoption.click();
    }
    async clicklogout()
    {
        await this.logoutoption.click();
        return this;
    }
}

