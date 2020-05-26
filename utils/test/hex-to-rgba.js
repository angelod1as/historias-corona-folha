var test = require('tape');
var utils = require('../build/utils');
var hex2rgba = require('../build/utils').hex2rgba;

test('hex2rgba', function (assert) {
	var simpleColor = '#fff';
	var complexColor = '#000000';
	var rgbColor = 'rgb(25,25,25)';
	var opacity = 1;

	assert.equal(utils.hex2rgba(complexColor), hex2rgba(complexColor));
	assert.equal(hex2rgba(simpleColor), 'rgba(255,255,255,1)');
	assert.equal(hex2rgba(rgbColor), 'rgba(25,25,25,1)');
	assert.equal(hex2rgba(rgbColor, .5), 'rgba(25,25,25,0.5)');
	assert.equal(hex2rgba('grawt'), 'rgba(0,0,0,1)');
	assert.equal(hex2rgba(complexColor), 'rgba(0,0,0,1)');
	assert.end();
});
