<<<<<<< HEAD
/* import {Page, expect} from "@playwright/test"
//import { ElementsHomePage } from "..elementosHomepage" 
=======
<<<<<<< Updated upstream
import {Page} from "@playwright/test"
import { ElementsHomePage } from "../elementsPage/elementosHomepage" 
=======
/* import {Page, expect} from "@playwright/test"
//import { ElementsHomePage } from "..elementosHomepage" 
>>>>>>> Stashed changes
>>>>>>> segundaBranch

export class homePage {
    readonly page:Page
    readonly elements: ElementsHomePage

    constructor(page:Page){
        
        this.page = page
        this.elements = new ElementsHomePage(page)
    }


    async filtroPagina(){

        
    }

<<<<<<< Updated upstream
    async () {
        
    }
}
=======
  
<<<<<<< HEAD
} */
=======
} */
>>>>>>> Stashed changes
>>>>>>> segundaBranch
