import{Page,Locator} from '@playwright/test'

export class addemployeelocators{
    readonly page:Page;
    readonly firstname:Locator;
    readonly lastname:Locator;
    readonly save:Locator;
    readonly cancel:Locator;

    constructor(page:Page){
        this.page=page;
        this.firstname=page.getByPlaceholder("First Name");
        this.lastname=page.getByPlaceholder("Last Name");
        this.save=page.getByRole("button",{name:"Save"});
        this.cancel=page.getByRole("button",{name:"Cancel"});
    }

    async clickonfirstname(){
        await this.firstname.click();
        await this.firstname.fill("shreedharsunny");
    }
    async clickonlastname(){
        await this.lastname.click();
        await this.lastname.fill("s")
    }
    async clickonsave(){
        await this.save.click();
    }
    async clickoncancel(){
        await this.cancel.click();
    }

}