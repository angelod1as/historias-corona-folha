var test = require('tape');
var utils = require('../build/utils');
var isMobile = require('../build/utils').isMobile;

test('isMobile', function (assert) {
	assert.equal(utils.isMobile(), isMobile());
	assert.end();
});
