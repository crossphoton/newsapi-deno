/**
 * This module provides access to (NewsAPI.org)'s API
 * http://newsapi.org
 * 
 * Refer to the README.md file to know how to use.
 * https://github.com/crossphoton/newsapi-deno#readme
 * 
 * This module is covered under MIT license
 * 
 * The creator and maintainer of this module does not relate to NewsAPI.org in any manner and
 */


const host = 'https://newsapi.org/v2'

const queryPoints = {
    country: "country",
    category: "category",
    query: "q",
    sources: "sources",
    pageSize: "pageSize",
    page: "page",
    language: "language",
    from: "from",
    to: "to",
    domains: "domains",
    exclude: "excludeDomains",
    queryInTitle: "qInTitle",
    sortBy: "sortBy",
}

export class NewsAPI{
    constructor(API_KEY){
        if(!API_KEY)
            throw new Error("No API Key provided")
        this.apiKey = API_KEY
        this.queryString = host
    }
    topHeadlines = (...args) => {
        this.queryString = host+"/top-headlines?"
        this.queryString = makeQueryString(this.queryString, args[0])
        return getData(this.queryString, this.apiKey);
    }
    everything = (...args) => {
        this.queryString = host+"/everything?"
        this.queryString = makeQueryString(this.queryString, args[0])
        return getData(this.queryString, this.apiKey);
    }
    sources = (...args) => {
        this.queryString = host+"/sources?"
        this.queryString = makeQueryString(this.queryString, args[0])
        return getData(this.queryString, this.apiKey);
    }
}



/**
 * Used for producing errors
 */
class ApiError extends Error{
    constructor(err){
        super();
        this.name = `Error Occured with code : ${err.status}`
        this.message = err.statusText
    }
}

class queryError extends Error{
    constructor(err){
        super();
        this.name = 'Error Occured'
        this.message = `term '${err.term}' is not supported. Refer the README file for more information.\ 
        If you feel the module is out of date generate a issue at https://www.github.com/crossphoton/newsapi-deno`
    }
}

class HTTPError extends Error {}


/**
 * Adds the API key to the string and use the fetch API to provide data fetched from the API
 * @param {*} initialQuery 
 * @param {*} API_KEY 
 */
const getData = async (initialQuery, API_KEY) => {
    let requestString = initialQuery + `&apiKey=${API_KEY}`
    let result = await fetch(requestString)
    if(!result.ok){
        console.log("From error checker in function")
        throw new ApiError(result)
    }
    return result.json();
}


/**
 * Creates the request URL without apiKey
 * @param {*} initialQuery 
 * @param {*} pointsObject 
 */
const makeQueryString = (initialQuery, pointsObject) => {
    let query = initialQuery
    for(let point in pointsObject){
        if(!queryPoints[point]) throw new queryError({term: point})
        query += `${queryPoints[point]}=${pointsObject[point]}&`;
    }
    query = query.substring(0, query.length-1);
    return query;
}

export default NewsAPI