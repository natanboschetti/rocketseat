/*
let score = 60

if (score >= 90) {
    console.log('A')
} else if (score >= 80) {
    console.log('B')
} else if (score >= 70) {
    console.log('C')
} else if (score >= 60) {
    console.log('D')
} else if (score < 60) {
    console.log('F')
}
*/

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 90
    let scoreC = score >= 70 && score < 80
    let scoreD = score >= 60 && score < 70
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}

console.log(getScore(12))