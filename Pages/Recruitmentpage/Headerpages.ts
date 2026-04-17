import{Page,Locator} from '@playwright/test'
export class headertabs{
    readonly page:Page;
    readonly candidates:Locator;
    readonly vacancies:Locator;
    constructor(page:Page){
        this.page=page;
        this.candidates=page.getByRole('link', { name: 'Candidates' });
        this.vacancies=page.getByRole('link', { name: 'Vacancies' })
    }
    async clickontabs(tabname:string){
        await this.page.getByRole("link",{name:tabname}).click();

    }
    }
