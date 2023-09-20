import {Page, expect} from "@playwright/test"
//import { ElementsHomePage } from "..elementosHomepage" 
import { ElementsHomePage } from "../../elementsPage/elementosHomepage" 


export class homePage {
    readonly page:Page
    readonly elementsHome: ElementsHomePage

    constructor(page:Page){
        
        this.page = page
        this.elementsHome = new ElementsHomePage(page)
    }


    async tituloPaginaProdutos(){
        await expect(this.elementsHome.tituloProdutos).toHaveText('Products')
        
    }

    async ListaProdutosPagina(){
       await expect(this.elementsHome.listaProdutos).toHaveCount(6)
        
    }

    async redesSociais(){
        await expect(this.elementsHome.redesSocialTwiter).toHaveText('Twitter')
        await expect(this.elementsHome.redesSocialFacebook).toHaveText('Facebook')
        await expect(this.elementsHome.redesSocialLinkendin).toHaveText('LinkedIn')
     }
}
