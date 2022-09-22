//receber uma string em celsius ou fahrenheit e fazer a transformação

/*
let temperature = 3
let unity = "F"

let celsius = "C"
let fahrenheit = "F"


function unityTransformation() {
    if (unity == "C") {
        temperature = (temperature * 9/5) + 32
    } else {
        temperature = (temperature - 32) * 5/9
    }
}

unityTransformation()
console.log(temperature)
*/

//agora com string, temperatura e string junto

function transformDegree(degree) {
    let celsius = degree.toUpperCase().includes('C') //'C' está incluso? após transformar a string em uppercase
    let fahrenheit = degree.toUpperCase().includes('F')


    //padrão (fluxo) de erro
    if (!celsius && !fahrenheit) { // se nenhum dos dois for true vai apresentar um erro
        throw new Error('Grau não identificado') //"lançando o erro"
    }

    //padrão (fluxo) definido para fórmula F -> C

    let updatedDegree = Number(degree.toUpperCase().replace("F", "")) //tirando o 'F' para sobrar apenas o número da string, e junto tranformando a string em número
    let formula = (fahrenheitDegree) => (fahrenheitDegree - 32) * 5/9
    let degreeSign = 'C'

    if (celsius) { //padrão (fluxo) alternativo C -> F
        updatedDegree = Number(degree.toUpperCase().replace("C", "")) //se, usar let para continuar utilizando a mesma variável e não declarar
        formula = (celsiusDegree) => (celsiusDegree * 9/5) + 32
        degreeSign = 'C'
    }


    return formula(updatedDegree) + degreeSign //mostrando o número e concatenando com a unidade, o updatedDegree é o número
}

try { 
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('50Z') //tentar fazer isso
} catch (error) { // quando der o erro apresenta no console
    console.log(error.message) //mandar só mensagem
}