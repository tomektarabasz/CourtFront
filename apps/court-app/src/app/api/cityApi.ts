import axios from 'axios';

export const getCities = async (queryCity?:string) => {
  const cancelationToken = axios.CancelToken.source();
  const requestPromise = axios.get(queryCity, {
    baseURL: 'http://192.168.1.143:80/',
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
    baseURL: 'http://192.168.1.143:80/court/',  
    // params: { cityId: cityId },
    cancelToken: cancelationToken.token,
  });
  const response = await requestPromise;
  return {
    response,
    cancelationToken,
  };
};
