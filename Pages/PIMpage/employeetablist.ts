import{Page,Locator} from '@playwright/test'

export class empoyeelistlocators{
    readonly page:Page;
    readonly employeename:Locator;
    readonly employeeid:Locator;
    readonly reset:Locator;
    readonly search:Locator;

    constructor(page:Page){
        this.page=page;
        this.employeename=page.getByPlaceholder("Type for hints..").first();
        this.employeeid=page.getByLabel("Employee Id");
        this.reset=page.getByRole("button",{name:"Reset"});
        this.search=page.getByRole("button",{name:"Search"});
    }

    async clickonemployeename(){
        await this.employeename.click();
        await this.employeename.fill("shreedharsunny");
    }
    async clickonemployeeid(){
        await this.employeeid.click();
        await this.employeeid.fill("1111")
    }
    async clickonreset(){
        await this.reset.click();
    }
    async clickonsearch(){
        await this.search.click();
    }
    
}
