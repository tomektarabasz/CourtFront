import axios from 'axios';
const baseUrl = 'http://192.168.1.143:80/'
// const baseUrl = 'http://0.0.0.0:8000/'

export const getCities = async (queryCity?:string) => {
  const cancelationToken = axios.CancelToken.source();
  const requestPromise = axios.get(queryCity, {
    baseURL: baseUrl,
    // params: { cityName: queryCity },
    cancelToken: cancelationToken.token,
  });
  const response = await requestPromise;
  return {
    response,
    cancelationToken,
  };
};

export const getCourts = async (cityId) => {
  const cancelationToken = axios.CancelToken.source();
  const requestPromise = axios.get(cityId, {
    baseURL: baseUrl+'court/',  
    // params: { cityId: cityId },
    cancelToken: cancelationToken.token,
  });
  const response = await requestPromise;
  return {
    response,
    cancelationToken,
  };
};
