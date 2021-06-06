// set: Acollection of elements
// Creating an empty set
const companies = new Set()

// Creating set from array
const subjects = [
    'English',
    'Kiswa',
    'Math'
]

const setOfSubjects = new Set(subjects)

// MAP
// Creating an empty map
const map = new Map()

// Creating a map from an Array
countries = [
    ['Kenya', 'Nairobi'],
    ['Uganda', 'Kampala'],
    ['Tanzania', 'Dodoma']
]

const map = new Map(countries)

// Adding Values to Map
const countriesMap = new map()
countriesMap.set('Kenya', 'Nairobi')
countriesMap.set('Uganda', 'Kampala')
countriesMap.set('Tanzania', 'Dodoma')

console.log(countriesMap)

// Getting Values from a Map
console.log(countriesMap.get('Finland'))

// Cheking Key in the Map
console.log(countriesMap.has('Finland')) //true


