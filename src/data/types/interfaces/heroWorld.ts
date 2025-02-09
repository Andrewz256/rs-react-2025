export interface IHero {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}
export interface IHeroResponse {
  count: number;
  next: string;
  previous: string;
  results: IHero[];
}

export interface SearchProps {
  pageNumber?: number;
  heroName?: string | null | undefined;

  all?: string;
}

export type HeroDataType = {
  data: IHero[];
  pageNum: number;
  next: string;
  previous: string;
};

export type HeroSearchType = {
  search: string;
};
