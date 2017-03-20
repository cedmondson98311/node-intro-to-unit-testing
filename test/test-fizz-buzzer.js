const fizzBuzzer = require('../fizzBuzzer.js');

it('should return keyword if number is divisible by 3, 5, or 15', function() {
	//normal cases
	const normalCases = [
		{a: 15, expected: 'fizz-buzz'},
		{a: 5, expected: 'buzz'},
		{a: 3, expected: 'fizz'},
		{a: 4, expected: 4}
	]

	normalCases.forEach(function(input) {
		const answer = fizzBuzzer(input.a);
		answer.should.equal(input.expected);
	});
});

it('should throw an error if an invalid input is provided', function() {
	//edge cases
	const edgeCases = [
		{a: '1', expected: Error},
		{a: 'one', expected: Error}
	];

	edgeCases.forEach(function(input) {
		(function() {fizzBuzzer(input.a)}).should.throw(Error)
	});
});