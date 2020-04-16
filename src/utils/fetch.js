const API_URL = 'https://ey86blceac.execute-api.us-east-1.amazonaws.com/prod/reports';

const fetchOptions = (bodyData, method) => ({
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
});

const fetchBase = async (inputData, method, callback, errorHandler = error => alert(error)) => {
    try {
        const result = await fetch(API_URL, fetchOptions(inputData, method));
        const json = await result.json();
        const queryData = JSON.parse(json.body).message;
        callback(queryData);
    } catch (error) {
        errorHandler('Request to server failed: ' + error);
    }
}

// Async/await on wrapper functions not really necessary but allows easy promise chaining.
export async function getAllReports(callback) {
    await fetchBase(undefined, 'GET', callback);
}

export async function insertReport(data, callback) {
    await fetchBase(data, 'POST', callback);
}

export async function updateReport(data, callback) {
    await fetchBase(data, 'PUT', callback);
}

export async function deleteReport(data, callback) {
    await fetchBase(data, 'DELETE', callback);
}

export async function reverseGeocode(apiQueryUrl) {
    const result = await fetch(apiQueryUrl);
    const json = await result.json();

    const placeDataArray = json.features.filter(x => x.place_type[0] === 'place');
    if (placeDataArray.length === 0) {
        alert('Marked location is not located in a country.');
        return {};
    }
    
    let [city, region, country] = placeDataArray[0].place_name.split(', ');
    if (country !== 'Finland') {
        alert('This app is currently restricted to Finland only. Your marker was located in: ' + region + ', ' + country);
        return {};
    }

    let address, postcode;
    const addressDataArray = json.features.filter(x => x.place_type[0] === 'address');
    if (addressDataArray.length > 0) {
        address = addressDataArray[0].place_name.split(', ')[0];
    }
    const postcodeDataArray = json.features.filter(x => x.place_type[0] === 'postcode');
    if (postcodeDataArray.length > 0) {
        postcode = postcodeDataArray[0].text;
    }

    return { city, address, postcode };
}