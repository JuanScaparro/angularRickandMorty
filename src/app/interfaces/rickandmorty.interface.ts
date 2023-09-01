export interface Character {
  id: number;
  name: string;
  gender: string;
  image: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
}

export interface ResponseApi {
  info: {};
  results: Character[];
}
