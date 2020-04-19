import { Action } from "redux";

export type Tool = 'add' | 'edit' | 'delete' | 'review'; 
export type ToolAction = Action & { payload: Tool };

export type DialogContent = {
  address: string;
  city: string;
  postcode: string;
  subject: string;
  description: string;
  reporter: string;
  markerIndex: number;
  latitude: number;
  longitude: number;
};

export type DialogContentAction = Action & {
  payload: DialogContent
};

export type Marker = {
    address: string,
    city: string,
    description: string,
    id: number,
    latitude: number,
    longitude: number,
    postcode: string,
    reporter: string,
    subject: string
}

export type MarkerAction = Action & {
    payload: Marker[]
}

export type Viewport = {
    longitude: number,
    latitude: number,
    zoom: number,
    bearing: number,
    pitch: number
}

export type ViewportAction = Action & {
    payload: Viewport
}