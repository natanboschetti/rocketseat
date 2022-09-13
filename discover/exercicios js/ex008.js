//throw, try e catch
//arremessar, tentar e pegar

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log('Depois do erro')
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
}