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

const headers = (jwtToken?: string): any => {
  if (!jwtToken)
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  return {
    //credentials: 'include',
    headers: {
      //Authorization: 'Bearer ' + jwtToken,
      'Content-Type': 'application/json'
    }
  };
};

const fetchOptions = (
  method: HTTPMethod,
  jwtToken?: string,
  bodyData?: ReportBodyInsert | ReportBodyUpdate | ReportBodyDelete
) => ({
  method,
  ...headers(jwtToken),
  body: JSON.stringify(bodyData)
});

const fetchBase = async (
  method: HTTPMethod,
  inputData?: ReportBodyInsert | ReportBodyUpdate | ReportBodyDelete
) => {
  const result = await fetch(API_URL, fetchOptions(method, getJwtToken(), inputData));
  const json = await result.json();
  return JSON.parse(json.body).message;
};

export async function getAllReports() {
  const result: QueryGetResult = await fetchBase('GET');
  return result.recordset;
}

export async function insertReport(data: ReportBodyInsert) {
  const result: QuerySetResult = await fetchBase('POST', data);
  if (isNaN(result.recordset[0].result as any))
    throw Error('Failed to insert: ' + result.recordset[0].result);
  return result.recordset[0].result;
}

export async function updateReport(data: ReportBodyUpdate) {
  const result: QuerySetResult = await fetchBase('PUT', data);
  if (result.recordset[0].result !== 'Success')
    throw Error('Failed to update: ' + result.recordset[0].result);
  return result.recordset[0].result;
}

export async function deleteReport(data: ReportBodyDelete) {
  const result: QuerySetResult = await fetchBase('DELETE', data);
  if (result.recordset[0].result !== 'Success')
    throw Error('Failed to delete: ' + result.recordset[0].result);
  return result.recordset[0].result;
}

export async function reverseGeocode(apiQueryUrl: string) {
  const result = await fetch(apiQueryUrl);
  const json: GeoJSONFeatureCollection = await result.json();

  let city, region, country, address, postcode;

  const placeDataArray = json.features.filter((feature) => feature.place_type[0] === 'place');
  if (placeDataArray.length > 0) [city, region, country] = placeDataArray[0].place_name.split(', ');

  const addressDataArray = json.features.filter((feature) => feature.place_type[0] === 'address');
  if (addressDataArray.length > 0) address = addressDataArray[0].place_name.split(', ')[0];

  const postcodeDataArray = json.features.filter((feature) => feature.place_type[0] === 'postcode');
  if (postcodeDataArray.length > 0) postcode = postcodeDataArray[0].text;

  return { city, region, country, address, postcode };
}

function getJwtToken(): string | undefined {
  let token = null;
  for (let i = 0; i < localStorage.length; i++) {
    if (/accessToken$/.test(localStorage.key(i) as string)) token = localStorage[localStorage.key(i) as string];
  }
  return token;
}
