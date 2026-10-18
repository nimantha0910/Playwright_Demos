import {test, expect} from "@playwright/test";

test("Verify page title", async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");
     
    let title :string = await page.title();
    console.log("Title :", title);

    await expect(page).toHaveTitle("Automation Testing Practice");

})