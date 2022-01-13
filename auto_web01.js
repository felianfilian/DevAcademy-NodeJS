const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

openGoogle();

async function openGoogle() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://www.google.com/ncr');
    await click('Ich stimme zu');
}

async function click(text) {
    await driver.findElement(By.xpath("//*[text() = '" + text + "'")).click();
}
