const API_URL = 'http://localhost:3000/dev/reports';

const fetchOptions = (bodyData, method) => ({
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
})

export async function getAllReports(callback) {
    const result = await fetch(API_URL);
    const json = await result.json();
    const markerData = JSON.parse(JSON.parse(json.body).message).recordset;
    callback(markerData);
}

export async function insertReport(data, callback) {
    const result = await fetch(API_URL, fetchOptions(data, 'POST'));
    const json = await result.json();
    const resultMessage = JSON.parse(JSON.parse(json.body).message);
    callback(resultMessage);
}

export async function updateReport(data, callback) {
    const result = await fetch(API_URL, fetchOptions(data, 'PUT'));
    const json = await result.json();
    const resultMessage = JSON.parse(JSON.parse(json.body).message);
    callback(resultMessage);
}

export async function deleteReport(data, callback) {
    const result = await fetch(API_URL, fetchOptions(data, 'DELETE'));
    const json = await result.json();
    const resultMessage = JSON.parse(JSON.parse(json.body).message);
    callback(resultMessage);
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