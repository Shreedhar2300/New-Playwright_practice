import{test,expect} from '@playwright/test'
import { Login } from '../Pages/Login.ts'
import { Sidebar } from '../Pages/Dashboard_components/sidebar_components.ts'
import{headertabs} from '../Pages/Recruitmentpage/Headerpages.ts'
import{candidatespagelocators} from '../Pages/Recruitmentpage/Candidatespage.ts'
import{candidatedetails} from '../Pages/Recruitmentpage/Candidatedetailspage.ts'


test("Testcase5", async({page})=>{
const firststep=new Login(page)
await firststep.Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await firststep.Userlogin("Admin","admin123")
const secondstep=new Sidebar(page)
await secondstep.clickmenu("Recruitment");
const thirdstep=new headertabs(page)
await thirdstep.clickontabs("Candidates");
const fourthstep=new candidatespagelocators(page)
await fourthstep.clickonadd();
const fifthstep=new candidatedetails(page)
await fifthstep.clickonfullname();
await fifthstep.clickonlastname();
await fifthstep.selectvacancy();
await fifthstep.clickonemail();
await fifthstep.clickonmobile();
await fifthstep.uploadresume();
await fifthstep.checkboxclick();
await fifthstep.clickonsave();
await thirdstep.clickontabs("Candidates");
await expect(page.getByRole("heading",{name:"Recruitment"})).toBeVisible({timeout:10000});;
await fourthstep.selectname();
await fourthstep.clickonsearch();
await page.pause();
await page.screenshot({path:'test-results/firstscreenshot.png',fullPage:true});

});


