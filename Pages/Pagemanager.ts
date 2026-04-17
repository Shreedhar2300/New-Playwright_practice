import{Page} from '@playwright/test'
import { Login } from "./Login";
import { Header } from "./Dashboard_components/Header_components";
import { Sidebar } from "./Dashboard_components/sidebar_components";
import { Headers } from "./Adminpage/Headers";
import { locators } from "./Adminpage/jobtab";
import { pimheaders } from "./PIMpage/pimHeaders";
import { empoyeelistlocators } from "./PIMpage/employeetablist";
import { addemployeelocators } from "./PIMpage/addemployee";
import { headertabs } from "./Recruitmentpage/Headerpages";
import { candidatespagelocators } from "./Recruitmentpage/Candidatespage";
import { candidatedetails } from "./Recruitmentpage/Candidatedetailspage";

export class DashboardPage{
    constructor(private page:Page){}

     dashboardpageheaders(){
        return new Header(this.page)
     }
     sidebarcompoent(){
        return new Sidebar(this.page)
     }
}
export class AdminPage{
    constructor(private page:Page){}
    adminpageheaders(){
        return new Headers(this.page)
    }
    jobtabcomponents(){
        return new locators(this.page)
    }
}
export class PimPage{
    constructor(private page:Page){}
    pimpageheadres(){
        return new pimheaders(this.page)
    }
    employeetablists(){
        return new empoyeelistlocators(this.page)
    }
    addemployees(){
        return new addemployeelocators(this.page)
    }
}
export class RecruitmentPage{
    constructor(private page:Page){}
    recruitmentheaders(){
        return new headertabs(this.page)
    }
    recruitmentcandidatespage(){
     return new candidatespagelocators(this.page)
    }
    recruitmentcandidatedetailspage(){
        return new candidatedetails(this.page)
    }
}

export class PageManager{
    constructor(private page:Page){}
    private _userlogin?:Login;
    private _dashboardPage?:DashboardPage;
    private _adminPage?:AdminPage;
    private _pimPage?:PimPage;
    private _recruitmentPage?:RecruitmentPage;
    userlogin(){
        if(!this._userlogin){
            this._userlogin=new Login(this.page)
        }
        return this._userlogin;
    }
    dashboardpages():DashboardPage{
        if(!this._dashboardPage)
        {
            this._dashboardPage=new DashboardPage(this.page)
        }
        return this._dashboardPage;
    }
    adminpages(){
        if(!this._adminPage){
            this._adminPage=new AdminPage(this.page)
        }
        return this._adminPage;
    }
    pimPage(){
        if(!this._pimPage){
            this._pimPage=new PimPage(this.page)
        }
        return this._pimPage;
    }
    recruitmentPage(){
        if(!this._recruitmentPage){
            this._recruitmentPage=new RecruitmentPage(this.page)
        }
        return this._recruitmentPage;
    }
}
