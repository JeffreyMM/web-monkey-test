var appRoot = require('app-root-path');
var MonkeyTest = require(appRoot + '/test/gremlins-test');
var monkey = new MonkeyTest();
var link = 'http://webdriver.io';
describe('Monkey testing with gremlins ', function () {
  it('Run Gremlins Test on webdriverio', function () {
      browser.windowHandleMaximize();
      browser.url(link);
      monkey.waitForReadyStateEx('complete', 15000);
      browser.timeouts('script', 15000);
      browser.executeAsync(monkey.loadScript);
      browser.logger.info('Gremlins Start...');
      browser.timeouts('script', 60000);
      browser.executeAsync(monkey.unleashGremlins, 60000);
  });

  it(link + ' should not raise any error', function() {
      browser.log('browser').value.forEach(function(log) {
          expect(log.level).not.toContain('ERROR');
          console.log(log.level + ": " + log.message);
         // browser.logger.info(log.level + ": " + log.message);
	 });
  });
});



