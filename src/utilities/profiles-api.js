import sendRequest from './send-request'

const BASE_URL = '/api/profiles'

function createProfile() { 
    return sendRequest(BASE_URL)
}

export function addToWatchList(coinId) { 
    return sendRequest(`${BASE_URL}/watchlist/${coinId}`, 'POST')
}

export function getProfile() { 
    return sendRequest(`${BASE_URL}/getProfile`)
}

export function deleteCoinInWatchlist(profileId, coinId) {
    return sendRequest(`${BASE_URL}/${profileId}/coin/${coinId}`, 'DELETE')
}