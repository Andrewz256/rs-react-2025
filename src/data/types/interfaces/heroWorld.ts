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
  results: IHero[] | undefined;
}

export interface PageNum {
  pageCount: number | undefined;
}

export interface AllHero {
  heroes: IHero[] | undefined;
}

export interface SearchProps {
  pageNumber?: number;
  heroName?: string;

  all?: string;
}

export type HeroDataType = {
  data?: IHero[];
  pageNum?: number;
  search?: string;
};
