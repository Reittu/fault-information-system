import {
  HTTPMethod,
  ReportBodyInsert,
  ReportBodyUpdate,
  ReportBodyDelete,
  QueryGetResult,
  QuerySetResult,
  GeoJSONFeatureCollection
} from '../types';

const API_URL = 'https://ey86blceac.execute-api.us-east-1.amazonaws.com/prod/reports';

const fetchOptions = (
  method: HTTPMethod,
  bodyData?: ReportBodyInsert | ReportBodyUpdate | ReportBodyDelete
) => ({
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(bodyData)
});

const fetchBase = async (
  method: HTTPMethod,
  inputData?: ReportBodyInsert | ReportBodyUpdate | ReportBodyDelete,
  callback?: (result: any) => void,
  errorHandler = (error: Error) => alert(error.message || error)
) => {
  try {
    const result = await fetch(API_URL, fetchOptions(method, inputData));
    const json = await result.json();
    const queryData = JSON.parse(json.body).message;
    if (callback) callback(queryData);
  } catch (error) {
    errorHandler('Request to server failed: ' + error.message || error);
  }
};

// Async/await on wrapper functions not really necessary but allows easy promise chaining.
export async function getAllReports(
  callback?: (result: QueryGetResult) => void,
  errorHandler?: (error: Error) => void
) {
  if (callback) await fetchBase('GET', undefined, callback, errorHandler);
}

export async function insertReport(
  data: ReportBodyInsert,
  callback?: (result: QuerySetResult) => void,
  errorHandler?: (error: Error) => void
) {
  await fetchBase('POST', data, callback, errorHandler);
}

export async function updateReport(
  data: ReportBodyUpdate,
  callback?: (result: QuerySetResult) => void,
  errorHandler?: (error: Error) => void
) {
  await fetchBase('PUT', data, callback, errorHandler);
}

export async function deleteReport(
  data: ReportBodyDelete,
  callback?: (result: QuerySetResult) => void,
  errorHandler?: (error: Error) => void
) {
  await fetchBase('DELETE', data, callback, errorHandler);
}

export async function reverseGeocode(apiQueryUrl: string) {
  const result = await fetch(apiQueryUrl);
  const json: GeoJSONFeatureCollection = await result.json();

  let city, region, country, address, postcode;

  const placeDataArray = json.features.filter((feature) => feature.place_type[0] === 'place');
  if (placeDataArray.length > 0) [city, region, country] = placeDataArray[0].place_name.split(', ');

  const addressDataArray = json.features.filter((feature) => feature.place_type[0] === 'address');
  if (addressDataArray.length > 0) address = addressDataArray[0].place_name.split(', ')[0];

  const postcodeDataArray = json.features.filter((x) => x.place_type[0] === 'postcode');
  if (postcodeDataArray.length > 0) postcode = postcodeDataArray[0].text;

  return { city, region, country, address, postcode };
}
