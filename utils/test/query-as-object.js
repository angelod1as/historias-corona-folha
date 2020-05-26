var test = require('tape');
var utils = require('../build/utils');
var queryAsObject = require('../build/utils').queryAsObject;

test('queryAsObject', function (assert) {
	assert.equal(JSON.stringify(utils.queryAsObject()), JSON.stringify(queryAsObject()));
	assert.end();
});
