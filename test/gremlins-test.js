
var MonkeyTest = function() {
    this.loadScript = function (callback) {
        var s = document.createElement('script');
        s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js';
        if(s.addEventListener) {
            s.addEventListener('load',callback,false);
        } else if(s.readyState) {
            s.onreadystatechange = callback
        }
        document.body.appendChild(s);
    }

    this.unleashGremlins = function(ttl, callback) {
        function stop() {
            horde.stop();
            callback();
        }
        var horde = window.gremlins.createHorde();
        // horde.seed(1234);

        horde.after(callback);
        window.onbeforeunload = stop;
        setTimeout(stop, ttl);
        horde.unleash();
    }

    this.waitForReadyStateEx = function (state, timeout) {
        return browser.waitUntil(function () {
            return state ===  browser.execute(function () {
                return document.readyState;
            }).value;
        }, timeout);
    };

}
module.exports = MonkeyTest;
