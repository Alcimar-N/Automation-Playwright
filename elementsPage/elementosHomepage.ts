import { Page, Locator} from "@playwright/test";

export class ElementsHomePage {
    readonly page: Page;
    readonly tituloPaginaProdutos: Locator;
    
   

    constructor(page: Page) {
        this.page = page;
        this.tituloPaginaProdutos = page.locator('[class^="header"] > span')
        
        
    }

}