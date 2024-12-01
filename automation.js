// Web Automation Example
const runAutomation = async () => {
    await page.goto('https://example.com');
    await page.fill('#email', 'test@example.com');
    await page.click('#submit');
    await page.screenshot({ path: 'result.png' });
};

module.exports = { runAutomation };