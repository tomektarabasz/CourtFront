import axios from 'axios';

export const getCities = async (queryCity?:string) => {
  const cancelationToken = axios.CancelToken.source();
  const requestPromise = axios.get('http://192.168.1.143:80/all', {
    params: { cityName: queryCity },
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
  const requestPromise = axios.get('http://192.168.1.143:80/all', {
    params: { cityId: cityId },
    cancelToken: cancelationToken.token,
  });
  const response = await requestPromise;
  return {
    response,
    cancelationToken,
  };
};
