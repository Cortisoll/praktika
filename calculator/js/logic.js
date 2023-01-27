import { print } from './utils/print.js'
const main = () => {
    let firstNum = '';
    let secondNum = '';
    let operator = '';

    return (state) => {
        if (isFinite(state)|| state === '.') {
            if (secondNum === '' && operator === '') {
                firstNum += state
                print(firstNum)
                
            }
            if (firstNum !== '' && operator !== '') {
                secondNum += state
                print(secondNum)

            }
        }

        if (state === '+' || state === '-' || state === 'x' || state === '/') {
            operator = state
            
        }
        if (state === '=') {
            switch (operator) {
                case '+':
                    let sum = Number(firstNum) + Number(secondNum);
                    print(sum)
                    break;

                case '-':
                    let subtraction = Number(firstNum) - Number(secondNum);
                    print(subtraction)
                    break;

                case 'x':
                    let multiplier = Number(firstNum) * Number(secondNum);
                    print(multiplier)
                    break;

                case '/':
                    let divide = Number(firstNum) / Number(secondNum);
                    print(divide)
                    break;
            
                default:
                    break;
            }
        }

        if (state === 'АС') {
            firstNum = '';
            secondNum = '';
            operator = '';
            print(0);
        }

        if (state === 'С' ) {
            if (secondNum === '' && operator === '') {
                firstNum = ''
                print(0)
                
            }
            if (firstNum !== '' && operator !== '') {
                secondNum = ''
                print(0)

            }
        }

    }
}

export default main