import {Page} from "@playwright/test"
import { ElementsHomePage } from "../elementsPage/elementosHomepage" 

export class homePage {
    readonly page:Page
    readonly elements: ElementsHomePage

    constructor(page:Page){
        
        this.page = page
        this.elements = new ElementsHomePage(page)
    }


    async filtroPagina(){

        
    }

    async () {
        
    }
}