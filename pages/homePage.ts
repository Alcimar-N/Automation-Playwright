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


    async testeClass(){
        await this.in.click()
        await this.page.waitForTimeout(5000)
    }
}