import {Page} from "@playwright/test"
import { ElementosPage } from "./elementos"

export class homePage extends ElementosPage {
    readonly page:Page
    readonly elements: ElementosPage

    constructor(page:Page){
        super(page)
        this.page = page
        this.elements = new ElementosPage(page)
    }


    async filtroPagina(){
        await this.filtro.click()
        await this.page.waitForTimeout(3000)
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('Enter')
        await this.page.waitForTimeout(3000)
        
    }

    async (){
        
    }
}