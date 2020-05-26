var test = require('tape');
var utils = require('../build/utils');
var prettyText = require('../build/utils').prettyText;

test('prettyText', function (assert) {
	var text = '"Água, \'água\', é d\'água!" --teste-- m3 ou m2... 1\'2"3 <a class="hidden">link</a>';
	var simpleText = 'Eita';

	assert.equal(utils.prettyText(text), prettyText(text));
	assert.equal(prettyText(text), '“Água, ‘água’, é d’água!” –teste– m³ ou m²… 1\'2"3 <a class="hidden">link</a>');
	assert.equal(prettyText(simpleText), 'Eita');
	assert.end();
});
