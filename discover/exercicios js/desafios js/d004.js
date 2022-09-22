const booksByCategory = [
    { //1 objeto
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {//2 objeto
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log('Total de categorias:', totalCategories
)

for (let category of booksByCategory) { // tranformando o objeto na variável category, permitindo que possa pegar este objeto e colocar um ponto para pegar a propriedade
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length) //pegando books.length da category 
}

function countAuthors() {
    let authors = [] //cada author encontrado no loop será adicionado aqui

    for (let category of booksByCategory) { //primeiro pegando o category
        for (let book of category.books) { //extraindo um objeto chamando de book, do array category.books
            if (authors.indexOf(book.author) == -1) { //se já houver um author no array de authors, não vai adicionar
                authors.push(book.title)
            } 
        }
    }

    console.log('Total de autores:',authors.length)
}

countAuthors()

function booksOfAuthor(author) {
    let books = [] //cada author encontrado no loop será adicionado aqui

    for (let category of booksByCategory) { //primeiro pegando o category
        for (let book of category.books) { //extraindo um objeto chamando de book, do array category.books
            if (book.author == author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')