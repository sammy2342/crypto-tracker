import sendRequest from './send-request'

const BASE_URL = '/api/coins';

export function getAllCoin() { 
    return sendRequest(BASE_URL)
}

export function getSingleCoin(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function createCoin(coinData) { 
    return sendRequest(BASE_URL, 'POST', {coinData})
}