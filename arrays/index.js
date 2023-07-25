
const now = new Date()
const  date = new Date('July 25 2023 09:00')

console.log(now.toDateString())

let address = {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001'
}

// function showAddress(address) {
//    return `${address.street} ${address.city}, ${address.zipCode}`
// }

// console.log(showAddress(address) )

// // factory Function

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'd')


// constructor Function

function Address(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

function areEqual(address1, address2) {
    if (address1 === address2)
    return true
}

function areSame(address1, address2) {
    if (Address.address1 === Address.address2)
    return true
}

function areEqual(address1, address2) {
    if (Address.address1 === Address.address2)
    return true
}

console.log(areSame())
console.log(areEqual())


const blogPost= {
    title: 'Hello',
    body: 'Im enjoying this blog',
    author: 'macRobinson',
    comments: [
        {'Liam': 'wonderful', 
        'Sarah': 'beautiful',
}],
isLive: true,

}

function