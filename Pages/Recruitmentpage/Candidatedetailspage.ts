import{Page,Locator} from '@playwright/test'
export class candidatedetails{
    readonly page:Page;
    readonly fullname:Locator;
    readonly lastname:Locator;
    readonly vacancy:Locator;
    readonly vacancytype:Locator;
    readonly email:Locator;
    readonly contactnumber:Locator;
    readonly resume:Locator;
    readonly checkbox:Locator;
    readonly save:Locator;
    readonly cancel:Locator;
    constructor(page:Page){
        this.page=page;
        this.fullname=page.getByPlaceholder("First Name");
        this.lastname=page.getByPlaceholder("Last Name");
        this.vacancy=page.getByText('-- Select --');
        this.vacancytype=page.getByRole('listbox').getByText('Software Engineer');
        this.email=page.getByRole('textbox', { name: 'Type here' }).first();
        this.contactnumber=page.getByRole('textbox', { name: 'Type here' }).nth(1);
        this.resume=page.locator("input.oxd-file-input");
        this.checkbox=page.locator('.oxd-icon.bi-check');
        this.save=page.getByRole("button",{name:"Save"})
        this.cancel=page.getByRole("button",{name:"Cancel"});
    }
    async clickonfullname(){
        await this.fullname.click();
        await this.fullname.fill("Sridhar");
    }
    async clickonlastname(){
        await this.lastname.click();
        await this.lastname.fill("sunny")
    }
    async selectvacancy(){
        await this.vacancy.click();
        await this.vacancytype.click();
    }
    async clickonemail(){
        await this.email.click();
        await this.email.fill("shri@gmail.com")
    }
    async clickonmobile(){
        await this.contactnumber.click();
        await this.contactnumber.fill("1234567890");
    }
    async uploadresume(){
        
        await this.resume.setInputFiles("C:/Users/Shreedhar/Desktop/fileupload.txt")
    }
    async checkboxclick(){
        await this.checkbox.click();
    }
    async clickonsave(){
        await this.save.click();
    }
}
