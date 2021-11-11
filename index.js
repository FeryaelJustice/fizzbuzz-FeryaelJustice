const App = {
    fizzBuzzPrint(number) {
        for (let i = 1; i <= number; i++) {
            console.log(`${i % 3 ? '' : 'Fizz'}${i % 5 ? '' : 'Buzz'}` || i)
        }
    },
    fizzBuzz(num) {
        if ((num % 5 === 0) && (num % 3 === 0)) {
            return 'FizzBuzz'
        }
        if (num % 5 === 0) {
            return 'Buzz'
        }
        if (num % 3 === 0) {
            return 'Fizz'
        }
        return num
    }
}

console.log(App.fizzBuzz(1))

module.exports = App