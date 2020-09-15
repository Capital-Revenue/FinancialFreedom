import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com',
    headers: {
		"content-type":"application/json",
		"x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": 'f0a62943c2msh032b13b7012cf5dp1afab4jsne15f73023897',
		"useQueryString":true
    },
});
export default {
    getData: () =>
    instance({
        'method':'GET',
        'url':'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
		'params': {
			'region':'US',
			'datatype':'json',
			'lang':'en',
			'count': '10'
        },
    })
}