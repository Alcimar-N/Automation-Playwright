import { Page, Locator} from "@playwright/test";

<<<<<<<< HEAD:pages/ElementsPage/elementosPageLogin.ts
export class ElementosPageLogin {
========
export class ElementsHomePage {
>>>>>>>> 5cf08b2b1abe02a366ce125840b42feee6432717:elementsPage/elementosHomepage.ts
    readonly page: Page;
    readonly userName: Locator;
    
   

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        ;
        
    }

}