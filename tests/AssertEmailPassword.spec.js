const {test, expect} = require('@playwright/test');

test("Assert Email", async({page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await expect(page.locator("h1")).toHaveText("Sign in to EventHub");
    await expect(page.getByPlaceholder("you@email.com", {exact: true})).toBeVisible();
    await expect(page.getByRole("button", {name: "Sign In", exact: true})).toBeVisible();
})

test("Assert Password", async({page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com/");
    await expect(page).toHaveURL(/\/login/);
    await expect(page.locator("#password")).toBeVisible();
    await expect(page.locator("h1")).toHaveText("Sign in to EventHub");
})
/* Core Playwright package is an automation library. Code needs to be manually
written to open browsers, manage pages, handle errors, and close them down.
Playwright test runner package is a complete testing framework. 
It automatically manages the browsers, runs tests in parallel, catches failures gracefully, 
and provides built-in assertions, reporting, and debugging tools. */
