import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { getCities, getCourts } from '../cityApi';
import { setCities, setCityQuery, setSelectedCity } from './actions';

const listOfEffectsForCities = [setCityQuery];
const listOfEffectsForCourts = [setSelectedCity];

function* makeCityRequest(action) {
  const apiRequest = getCities.bind(this);
  const cityQuery = yield select((state)=>state.cityQuery)
  if(cityQuery==='') {
    return
  }
  try {
    const { response } = yield call(apiRequest, cityQuery);
    yield put(setCities(response.data));
  } catch (exception) {
    console.log(exception);
  }
}

function* makeCourtRequest(action) {
  const apiRequest = getCourts.bind(this);
  const selectedCity = yield select((state)=>state.selectedCity)
  try {
    const { response } = yield call(apiRequest, selectedCity);
    yield put(setCities(response.data));
  } catch (exception) {
    console.log(exception);
  }
}

export function* rootSaga() {
  yield all([
    takeLatest(listOfEffectsForCities, makeCityRequest),
    takeLatest(listOfEffectsForCourts, makeCourtRequest),
  ]);
}
