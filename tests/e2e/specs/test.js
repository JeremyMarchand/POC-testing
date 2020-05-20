// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const chromedriver = require('chromedriver');

module.exports = {
  before: function(browser, done) {
    chromedriver.start();
    done();
  },
  'default e2e tests': (browser, done) => {
    browser
      .url("http://127.0.0.1:8081")
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      //.assert.elementCount('img', 1)
        .end(done)
  },
  after(browser, done) {
    chromedriver.stop()
    browser.end(() => {
      done();
    });
  },
}
