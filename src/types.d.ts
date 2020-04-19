import { Action } from 'redux';
import { SyntheticEvent } from 'react';

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'; 

export type PayloadAction<T> = Action & {
  payload: T
}

export type Tool = 'add' | 'edit' | 'delete' | 'review'; 

export type ReportBase = {
  address: string;
  city: string;
  description: string;
  latitude: number;
  longitude: number;
  postcode: string;
  subject: string;
  reporter?: string;
}

export type Marker = ReportBase & {
  reporter: string,
  id: number | null,
}

export type DialogContent = ReportBase & {
  reporter: string;
  markerIndex: number;
};

export type Viewport = {
    longitude: number,
    latitude: number,
    zoom: number,
    bearing: number,
    pitch: number
}

export type MapLayerEvent = SyntheticEvent & {
  target: HTMLElement,
  lngLat: number[],
  features: object[]
}

export type ReportBodyInsert = ReportBase;

export type ReportBodyUpdate = {
  id: number;
  subject: string;
  description: string;
};

export type ReportBodyDelete = {
  id: number,
  userToken?: string
}

type QueryResultMessage = {
  result: string
}

export type QueryGetResult = {
  recordset: Marker[]
}

export type QuerySetResult = {
  recordset: QueryResultMessage[]
}

export type GeoJSONFeature = {
  bbox: number[],
  center: number[],
  context: {
    id: string,
    short_code: string,
    wikidata: string,
    text: string
  }[],
  geometry: {
    coordinates: number[],
    type: string
  },
  id: string,
  place_name: string,
  place_type: string[],
  properties: object,
  relevance: number,
  text: string,
  type: string,
}

export type GeoJSONFeatureCollection = {
  attribution: string,
  type: string,
  query: number[],
  features: GeoJSONFeature[]
}
