export interface IHero {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: URL;
  films: URL[];
  species: URL[];
  vehicles: URL[];
  starships: URL[];
  created: Date;
  edited: Date;
  url: URL;
}
export interface IHeroResponse {
  count: number;
  next: URL | null;
  previous: URL | null;
  results: IHero[];
}

export interface PageNum {
  number: number;
}

export interface AllHero {
  heroes: IHero[];
}
