import { Page, Locator} from "@playwright/test";

export class ElementsHomePage {
    readonly page: Page;
    readonly tituloProdutos: Locator;
    
   

    constructor(page: Page) {
        this.page = page;
        this.tituloProdutos = page.locator('.header_secondary_container > span')
        
    }

}

