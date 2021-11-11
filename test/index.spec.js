const App = require('../index');
const assert = require('assert'); // Mocha
const expect = require('chai').expect; // Chai

describe('FizzBuzz', () => {
    it('FizzBuzz returns 1', () => {
        expect(App.fizzBuzz(1)).to.equal(1);
    }),
    it('FizzBuzz returns 2', () => {
        expect(App.fizzBuzz(2)).to.equal(2);
    }),
    it('FizzBuzz returns "Fizz" for 3', () => {
        expect(App.fizzBuzz(3)).to.equal('Fizz');
    }),
    it('FizzBuzz returns "Fizz" for multiples of 3', () => {
        expect(App.fizzBuzz(6)).to.equal('Fizz');
    }),
    it('FizzBuzz returns "Buzz" for 5', () => {
        expect(App.fizzBuzz(5)).to.equal('Buzz');
    }),
    it('FizzBuzz returns "Buzz" for multiples of 5', () => {
        expect(App.fizzBuzz(5)).to.equal('Buzz');
    }),
    it('FizzBuzz returns "Buzz" for multiples of 3 & 5', () => {
        expect(App.fizzBuzz(15)).to.equal('FizzBuzz');
    })
});