var flatten = require("./");

it('flattens arrays', function(){

  expect(flatten([1, [2, [3, 4], 5], 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);

});
