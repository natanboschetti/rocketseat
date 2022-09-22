let family = {
    incomes: [100, 100, 100, 100],
    expenses: [100, 100, 100, 100, 100]
}

function sumArray(array) {
    let sum = 0 

    for (let value = 0; value < array.length; value++) {
        sum += array[value]
        
    }
    /*
        for (let value of value) {
        sum += value
        }
    */
    return sum
}

function calculateBalance() {
    let sumIncomes = sumArray(family.incomes)
    let sumExpenses = sumArray(family.expenses)

    const total = sumIncomes - sumExpenses

    let balanceMessage;

    if (total > 0) {
        balanceMessage = 'positivo'
    } else {
        balanceMessage = 'negativo'
    }

    console.log(`Seu saldo é ${balanceMessage}: R$${total.toFixed(2)}`)
}

calculateBalance()



