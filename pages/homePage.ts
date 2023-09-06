import {Page, expect} from "@playwright/test"
import { ElementsHomePage } from "../elementsPage/elementosHomepage" 

export class HomePage {
    readonly page:Page
    readonly elementsHome: ElementsHomePage

    constructor(page:Page){
        this.page = page
        this.elementsHome = new ElementsHomePage(page)
    }


    async verificaTituloProduto(){
        await expect(this.elementsHome.tituloPaginaProdutos).toHaveText('Products')

    }

  
}