import { createAction } from "typesafe-actions";
import { City, Court } from "./types";


const SET_SELECTED_CITY = "SET_SELECTED_CITY";
const SET_CITIES = "SET_CITIES";
const SET_CITY_QUERY = "SET_CITY_QUERY";
const SET_COURTS = "SET_COURTS";
const SET_SELECTED_COURT = "SET_SELECTED_COURT";

export const setSelectedCity = createAction(SET_SELECTED_CITY)<string>();
export const setCities = createAction(SET_CITIES)<City[]>();
export const setCityQuery = createAction(SET_CITY_QUERY)<string>();
export const setCourts = createAction(SET_COURTS)<Court[]>();
export const setSelectedCourt = createAction(SET_SELECTED_COURT)<string>();