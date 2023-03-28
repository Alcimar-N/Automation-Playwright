import { Page, Locator } from "@playwright/test";

export class ElementosPage {
    readonly page: Page;
    // readonly getStartedLink: Locator;
    readonly texto: Locator;


    constructor(page: Page) {
        this.page = page;

        // this.getStartedLink = page.locator('a', { hasText: 'Get started' });
        this.texto = page.locator('//*[@id="root"]/div/div[1]');
    }
}