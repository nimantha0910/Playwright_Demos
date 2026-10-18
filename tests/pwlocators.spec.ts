import {test, expect, Locator} from "@playwright/test";

test("Verify playwright locators",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //identify images and area elements
    // const logo : Locator = await page.getByAltText("nopCommerce demo store");
    // await expect(logo).toBeVisible();

    //identify element by text
    // const title : Locator = page.getByText("For Selenium, Cypress & Playwright");
    // await expect(title).toBeVisible();

    //identify interactive elements like btns, checkboxes, tables
    // const Link : Locator= await page.locator("#PageList2").getByRole("link" ,{name: "Blog"});
    // await Link.click();
    // //await expect(Link).toBeVisible();

    // await expect( page.getByRole("heading", {name : "SDET-QA Blog"})).toBeVisible();

    //fill the text boxes
    //await page.getByLabel("Name:").fill("Nimantha");

    //get from a place holder
    await page.getByPlaceholder("Enter EMail").fill("nimantha@gmail.com");
})