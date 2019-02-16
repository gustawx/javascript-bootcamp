let square = (num = 2, bu) => {
    let result = num*num
    return result + "   " + bu
}
let nana = "fr"
console.log(square(1,`$${nana}`))

let myBook = {
    title: '1984',
    author: 'orwell',
    pageCount: 666
}

let getSummary = (book) => {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount}`
    }
}

let myBookSummary = getSummary(myBook)

console.log(`${myBookSummary.summary} === ${myBookSummary.pageCountSummary}`)

//name age location
//andrew is 27 and lives in Bubu
//increase age by 1

let andrew = {
    age: 27,
    name: 'Andrew',
    location: 'Bubu'
}

console.log(`${andrew.name} is ${andrew.age} and lives in ${andrew.location}`)

let increaseAge = (person) => {
    return {
        age: person.age + 1,
        name: person.name,
        location: person.location,
    }
}

//andrew = increaseAge(andrew)
andrew.age = andrew.age + 1

console.log(`${andrew.name} is ${andrew.age} and lives in ${andrew.location}`)