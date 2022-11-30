import sendRequest from './send-request'

const BASE_URL = '/api/profiles'

function createProfile() { 
    return sendRequest(BASE_URL)
}

export function addToWatchList(coinId) { 
    return sendRequest(`${BASE_URL}/watchlist/${coinId}`, 'POST')
}

export function getProfile(id) { 
    return sendRequest(`${BASE_URL}/${id}`)
}

export function deleteCoinInWatchlist(watchlistId) {
    return sendRequest(`${BASE_URL}/${watchlistId}`, 'DELETE')
}