let family = {
    incomes: [200, 100, 300, 400],
    expenses: [40, 100, 400, 150]
}

function sum(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()




