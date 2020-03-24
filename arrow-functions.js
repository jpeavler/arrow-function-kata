// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!
// I, Josh, added changes to lines 8, 12, 16, 20, and 24 to debug

describe('Arrow functions', function() {
    it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
      var func = () => {};    //changed func to arrow syntax
      assert.equal('' + func, '() => {}');
    });
    it('instead `{}` use an expression, as return value', function() {
      var func = () => 'I return too';  //changed return value to 'I return too'
      assert.equal(func(), 'I return too');
    });
    it('one parameter can be written without parens', () => {
      var func = param => param - 1;  //changed parameter p to param
      assert.equal(func(25), 24);
    });
    it('many params require parens', () => {
      var func = (param, param1) => param + param1; //added () to encase param, param1
      assert.equal(func(23, 42), 23+42);
    });
    it('the function body needs parens to return an object', () => {
      var func = () => ({iAm: 'an object'});        //added () to encase {iAm: 'an object'}
      assert.deepEqual(func(), {iAm: 'an object'});
    });
  });
  