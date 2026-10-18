import{test, expect, Locator} from "@playwright/test";

test("Verify DynamicXpath", async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=1; i<=5; i++){

       const btn : Locator= page.locator('//button[@name="start" or @name="stop"]');
       await btn.click();

       await page.waitForTimeout(1000);

    }


})