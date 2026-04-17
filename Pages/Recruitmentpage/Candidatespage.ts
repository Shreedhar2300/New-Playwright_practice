import{Page,Locator} from '@playwright/test'
export class candidatespagelocators{
    readonly page:Page;
    readonly vacancy:Locator;
    readonly vacancytype:Locator;
    readonly candidatename:Locator;
    readonly search:Locator;
    readonly add:Locator;
    constructor(page:Page){
        this.page=page;
        this.vacancy=page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon');
        this.vacancytype=page.getByText('Software Engineer')
        this.candidatename=page.getByRole('textbox', { name: 'Type for hints...' })
        this.search=page.getByRole("button",{name:"Search"});
        this.add=page.getByRole('button', { name: ' Add' });
    }
    async selectvacancy(){
        await this.vacancy.click();
        await this.vacancytype.click();
    }
    async selectname(){
        await this.candidatename.click();
        await this.candidatename.fill("Sridhar sunny")
    }
    async clickonsearch(){
        await this.search.click();
    }
    async clickonadd(){
        await this.add.click();
    }
}