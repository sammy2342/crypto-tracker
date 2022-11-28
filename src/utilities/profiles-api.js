import sendRequest from './send-request'

const BASE_URL = 'api/profiles'

function getAllProfile() { 
    return sendRequest(BASE_URL)
}

function createProfile(profileData) { 
    return sendRequest(BASE_URL, 'POST', profileData)
}

function pushCoinProfile(profileId) { 
    return sendRequest(`${BASE_URL}/${profileId}`)
}