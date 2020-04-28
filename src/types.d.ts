import { Action } from 'redux';

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type Tool = 'add' | 'edit' | 'delete' | 'review';

export type User = string | null;

export interface PayloadAction<T> extends Action {
  payload: T;
}

export interface ReportBase {
  address: string;
  city: string;
  description: string;
  latitude: number;
  longitude: number;
  postcode: string;
  subject: string;
  reporter: string;
}

export interface Marker extends ReportBase {
  id: number | null;
}

export interface CustomMarkerProps extends ReportBase {
  dbIndex: number | null;
  localIndex: number;
  offsetLeft?: number;
  offsetTop?: number;
}

export interface ReportDialog extends ReportBase {
  open: boolean;
  markerIndex: number;
}

export interface UserDialog {
  open: boolean;
  mode: 'register' | 'login' | 'logout' | 'forgot'
}

export interface Snackbar {
  message: string;
  open: boolean;
  severity: 'success' | 'info' | 'warning' | 'error' | undefined;
}

export interface Viewport {
  longitude: number;
  latitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
}

export type ReportBodyInsert = ReportBase;

export interface ReportBodyUpdate {
  id: number;
  subject: string;
  description: string;
}

export interface ReportBodyDelete {
  id: number;
  userToken?: string;
}

interface QueryResultMessage {
  result: string;
}

export interface QueryGetResult {
  recordset: Marker[];
}

export interface QuerySetResult {
  recordset: QueryResultMessage[];
}

export interface GeoJSONFeature {
  bbox: number[];
  center: number[];
  context: {
    id: string;
    short_code: string;
    wikidata: string;
    text: string;
  }[];
  geometry: {
    coordinates: number[];
    type: string;
  };
  id: string;
  place_name: string;
  place_type: string[];
  properties: object;
  relevance: number;
  text: string;
  type: string;
}

export interface GeoJSONFeatureCollection {
  attribution: string;
  type: string;
  query: number[];
  features: GeoJSONFeature[];
}
