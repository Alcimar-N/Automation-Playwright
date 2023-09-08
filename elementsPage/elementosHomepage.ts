<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import { Page, Locator} from "@playwright/test";

export class ElementsHomePage {
    readonly page: Page;
    readonly userName: Locator;
    
   

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        ;
        
    }

}
=======
>>>>>>> Stashed changes
>>>>>>> segundaBranch
