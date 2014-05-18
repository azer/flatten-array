var test = require("prova");
var flatten = require("./");

test('flattens arrays', function (assert) {
  assert.plan(1);
  assert.deepEqual(flatten([1, [2, [3, 4], 5], 6]), [1, 2, 3, 4, 5, 6]);
});
