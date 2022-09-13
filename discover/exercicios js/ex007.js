//switch
/*
let expression = 'a'

switch (expression) {
    case 'a':
        console.log('a')
        break;

    case 'b':
        console.log('b')
        break

    default:
        break;
}
*/

function calculate(number1, operator, number2) {
    let result
    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;

        case '*':
            result = number1 * number2
            break;

        case '/':
            result = number1 / number2
            break;

        default:
            console.log('O Operador não foi implementado no programa.')
            break;
    }

    return result
}

console.log(calculate(3,'*',2))