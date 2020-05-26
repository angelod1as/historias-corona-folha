var test = require('tape');
var utils = require('../build/utils');
var styleNumber = require('../build/utils').styleNumber;

test('styleNumber', function (assert) {
	assert.equal(styleNumber(13025.25), '13.025,25');
	assert.equal(styleNumber(13025.25), utils.styleNumber(13025.25));
	assert.equal(styleNumber(13025), '13.025,00');
	assert.equal(styleNumber(13025, { separator: '.' }), '13,025.00');
	assert.equal(styleNumber(13025, { length: 3 }), '13.025,000');
	assert.end();
});
