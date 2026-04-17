import{test,expect} from '@playwright/test'
import { Login } from '../Pages/Login'
import { Sidebar } from '../Pages/Dashboard_components/sidebar_components'
import { pimheaders } from '../Pages/PIMpage/pimHeaders'
import { empoyeelistlocators } from '../Pages/PIMpage/employeetablist'
import { addemployeelocators } from '../Pages/PIMpage/addemployee'

test("testcase4",async({page})=>{
const step1=new Login(page)
await step1.Launchurl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page.getByRole("heading",{name:"Login"})).toBeVisible({timeout:10000});
await step1.Userlogin("Admin","admin123");
await expect(page.getByRole("heading",{name:"Dashboard"})).toBeVisible({timeout:10000});
const step2=new Sidebar(page)
await step2.clickmenu("PIM");
await expect(page.getByRole("heading",{name:"PIM"})).toBeVisible();
const step3=new pimheaders(page)
await step3.clickontab("Add Employee")
const step4=new addemployeelocators(page)
await step4.clickonfirstname();
await step4.clickonlastname();
await step4.clickonsave();
await step3.clickontab("Employee List");
const step5=new empoyeelistlocators(page)
await step5.clickonemployeename();
await step5.clickonsearch();
});

