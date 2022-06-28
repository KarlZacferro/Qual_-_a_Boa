// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert')

describe('testaFormatoDeEmailCerto', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('testaFormatoDeEmailCerto', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1050, height: 748 })
    await driver.findElement(By.id("exampleFormControlInput1")).click()
    await driver.findElement(By.id("exampleFormControlInput1")).sendKeys("testandooemail@gmail.com")
    await driver.findElement(By.id("exampleFormControlInput2")).sendKeys("123456")
    await driver.findElement(By.id("gridCheck")).click()
    await driver.findElement(By.id("botaoCadastrar")).click()
    await driver.findElement(By.css(".display-5")).click()
    {
      const elements = await driver.findElements(By.css(".display-5"))
      assert(elements.length)
    }
    await driver.close()
  })
})
