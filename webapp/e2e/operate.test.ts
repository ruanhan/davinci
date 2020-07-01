import puppeteer from 'puppeteer'

const WIDTH = 1500
const HEIGHT = 800
jest.setTimeout(30000)
describe('e2e', () => {
  it('login', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 50,
      defaultViewport: {
        width: WIDTH,
        height: HEIGHT
      },
      args: [`--window-size=${WIDTH},${HEIGHT}`]
    })
    const pages = await browser.pages()
    const page = pages[0]
    await page.goto('localhost:5002')
    await page.type('[placeholder="用户名"]', 'letiandou@creditease.cn')
    await page.type('[placeholder="密码"]', '111111')
    await page.click('[type="submit"]')
    await page.waitFor(2000)
    setTimeout(() => {
      browser.close()
    }, 4000)
    await expect(page).toMatch('创建')
    await expect(page).toMatch('全部')
    await expect(page).toMatch('我参与的')
  })
})
