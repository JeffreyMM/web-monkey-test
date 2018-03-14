var appRoot = require('app-root-path');
var MonkeyTest = require(appRoot + '/test/gremlins-test');
var monkey = new MonkeyTest();
describe('Pre-Operation for AUT - such as login, test data preparation。 etc', function () {
    it('Login to application as test-user', function () {
        browser.url('http://***.***');
        browser.setValue('.username', 'test_user');
        browser.setValue('.password', 'test_password');
        browser.click('#btn_signin');
        monkey.waitForReadyStateEx('complete', 15000);
        expect(browser.getText('#title')).toEqual('page-name');
    });
});
