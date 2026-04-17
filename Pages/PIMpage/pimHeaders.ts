import{Page,Locator} from '@playwright/test'

export class pimheaders{
    readonly page:Page;
    readonly configuration:Locator;
    readonly employeelist:Locator;
    readonly addemployee:Locator;
    readonly reports:Locator;

    constructor(page:Page){
        this.page=page;
        this.configuration=page.getByRole("link",{name:"Configuration"}).locator('i');
        this.employeelist=page.getByRole("link",{name:"Employee List"}).locator('i');
        this.addemployee=page.getByRole("link",{name:"Add Employee"}).locator('i');
        this.reports=page.getByRole("link",{name:"Reports"}).locator('i');
    }

    async clickontab(listitem:string){
        await this.page.getByRole("link",{name:listitem}).click();
    }
}