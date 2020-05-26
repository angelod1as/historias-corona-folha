var test = require('tape');
var utils = require('../build/utils');
var folhaDate = require('../build/utils').folhaDate;

test('folhaDate', function (assert) {
	assert.equal(JSON.stringify(utils.folhaDate('1.jan')), JSON.stringify(folhaDate('1.jan')));
	assert.equal(folhaDate('13.ago.12').toDateString(), new Date('2012/08/13').toDateString());
	assert.equal(folhaDate('13.ago.83').toDateString(), new Date('1983/08/13').toDateString());
	assert.equal(folhaDate('13.ago', 1983).toDateString(), new Date('1983/08/13').toDateString());
	assert.equal(folhaDate('13.mks.16'), null);
	assert.end();
});
