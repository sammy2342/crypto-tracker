import sendRequest from './send-request'

const BASE_URL = '/api/coins';

export function getAllCoin() { 
    return sendRequest(BASE_URL)
}