export type AppState = {
  selectedCity: string;
  cities: City[];
  cityQuery: string;
  courts: Court[];
  selectedCourt: string;
};

export type AppActions = {
  type: string;
};

export type City = {
  _id: string;
  name: string;
  key: string;
  wojewodztwo: string;
  powiat: string;
  gmina: string;
};

export type Court = {
  _id: string;
  name: string;
  key: string;
  wojewodztwo: string;
  powiat: string;
  gmina: string;
};
