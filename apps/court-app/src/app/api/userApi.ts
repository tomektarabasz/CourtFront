import axios, { AxiosResponse } from 'axios';
const baseUrl = 'http://localhost:80/';
// const baseUrl = 'http://192.168.1.143:80/'
// const baseUrl = 'http://192.168.1.17:8000/'
// const baseUrl = 'http://89.65.210.136:8000/'

type CheckNickAvaibilityResponse = {
  isAvaiable: boolean;
};

export const checkNickAvaibility = async (nick: string) => {
  const requestPromise = axios.get(nick, {
    baseURL: baseUrl + 'user/checknick/',
  });
  const response = await requestPromise;
  return response as AxiosResponse<CheckNickAvaibilityResponse>;
};

type CreateUserBody = {
  nick: string;
  password: string;
  sample: string[];
};

type CreateUserResponse = {
  isCreated: boolean;
};

export const createUser = async (
  nick: string,
  password: string,
  sample: string,
  sample2:string
) => {
  const body: CreateUserBody = { nick, password, sample:[sample,sample2] };
  const requestPromise = axios.post(baseUrl + 'user/create', body);
  const response = await requestPromise;
  return response as AxiosResponse<CreateUserResponse>;
};

export type CheckUserIdentity = {
  authenticated:boolean,
  score:number
};

export const checkUserIdentity = async (
  nick: string,
  password: string,
  sample: string,
) => {
  const body: CreateUserBody = { nick, password, sample:[sample] };
  const requestPromise = axios.post(baseUrl + 'user/login', body);
  const response = await requestPromise;
  return response as AxiosResponse<CheckUserIdentity>;
};
