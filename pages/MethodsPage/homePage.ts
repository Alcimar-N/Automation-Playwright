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

    async acessaMenu(){
        await this.elementsHome.menuBurger.click()
        await expect(this.elementsHome.listaMenuBurger).toHaveCount(4)
    }

    async filtraProdutos(){
        await this.elementsHome.filtroProdutos.click()
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.down('ArrowDown')
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.press('Enter')
        expect(this.page.locator('.product_sort_container > [value="lohi"]')).toHaveText('Price (low to high)')
        await this.page.waitForTimeout(3000)
        
    }


}
