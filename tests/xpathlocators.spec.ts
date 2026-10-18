import{test, expect, Locator} from "@playwright/test";

test("Xpath demo" , async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const logo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();

    const products : Locator =page.locator("//h2/a[contains(@href,'computer')]");

    let productTitles : string[] = await products.allTextContents();

    for(let pt of productTitles)
    {
        console.log(pt);
    }

})