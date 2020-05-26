var test = require('tape');
var utils = require('../build/utils');
var getBrowser = require('../build/utils').getBrowser;

test('getBrowser', function (assert) {
	assert.notEqual(getBrowser(), {}, getBrowser());
	assert.equal(JSON.stringify(utils.getBrowser()), JSON.stringify(getBrowser()));
	assert.equal(getBrowser('browser'), getBrowser().browser);
	assert.end();
});
