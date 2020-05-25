# NewsAPI

A deno interface for NewsAPI.org

### From NewsAPI.org

*News API is a simple and easy-to-use API that returns JSON metadata for headlines and articles live all over the web right now.*

**Search worldwide news with code
Get breaking news headlines, and search for articles from over 50,000 news sources and blogs with our news API**

**Note :** This driver only supports only *v2* of the API.

Please look at the [documentation](https://newsapi.org/docs) to know about the API and how to use it.
If you use this API as a developer (free plan) remeber to put **'Powered by NewsAPI.org'**.

## Using the module

### Adding to your project

Use ES6 import to import the module to your project. The module will be cached in your device after first use (in deno).

`import NewsAPI from 'https://crossphoton.github.io/cdn/NewsAPI.js'`

### Initializing

Start calling the constructor with your API Key as a parameter

`var newsApi = new NewsApi(API_KEY)`

### Top Headlines

`newsApi.topHeadlines({ Query Object })
.then(res => ...)
.catch(err => ...)`

Object below describes the parameters that can be passed for *top-headlines* with equivalent meaning w.r.t. [NewsAPI.org documentation](https://newsapi.org/docs).

const topHeadlinesPoints = {

    country: "country",
    category: "category",
    query: "q",
    sources: "sources",
    pageSize: "pageSize",
    page: "page",
}

### Everything

`newsApi.everything({ Query Object })
.then(res => ...)
.catch(err => ...)`

Object below describes the parameters that can be passed for *everything* with equivalent meaning w.r.t. [NewsAPI.org documentation](https://newsapi.org/docs).

const everythingPoints = {

    query: "q",
    language: "language",
    from: "from",
    to: "to",
    domains: "domains",
    exclude: "excludeDomains",
    queryInTitle: "qInTitle",
    sortBy: "sortBy",
    pageSize: "pageSize",
    page: "page",
}

### Sources

`newsApi.sources({ Query Object })
.then(res => ...)
.catch(err => ...)`

Object below describes the parameters that can be passed for *sources* with equivalent meaning w.r.t. [NewsAPI.org documentation](https://newsapi.org/docs).

const sourcesPoints = {

    category: "category",
    language: "language",
    country: "country",

}


### Keywords

api news newsapi