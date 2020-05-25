import NewsAPI from './NewsApi.js'
// const NewsApi = require('./src/node')

// console.log(typeof(NewsApi))

let apiKey = "10fe6539e67344ff99a6d3b7b1dec530"

var test = new NewsAPI(apiKey)
let result;
var khasdb = test.sources({
    kuchBhi: 'india'
})
.then(data => console.log(data))
.catch(err => console.log(err))