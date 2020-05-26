var test = require('tape');
var utils = require('../');
var slugfy = require('../').slugfy;

test('slugfy', function (assert) {
	var text = '(Testão) da* {[Porra]}!? .  100% 1º';

	assert.equal(utils.slugfy(text), slugfy(text));
	assert.equal(slugfy(text), 'testao-da-porra-100-por-cento-primeiro');
	assert.equal(slugfy(text, { url: false }), 'testao-da-porra-100-1o');
	assert.equal(slugfy(text, { url: false, hyphens: false }), 'testaodaporra1001o');
	assert.equal(slugfy(text, { hyphens: false }), 'testaodaporra100porcentoprimeiro');
	assert.end();
});
