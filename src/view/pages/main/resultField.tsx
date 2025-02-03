import getStarWarsHero from '../../../data/api/getStarWarsHero';
import { IHeroResponse } from '../../../data/types/interfaces/heroWorld';

export const page = { number: 0 };
export async function getHeroPage(pageNumber?: number) {
  let heroListPage: number = 1;
  if (pageNumber) {
    heroListPage = pageNumber;
  }
  const allHero: IHeroResponse | null = await getStarWarsHero(heroListPage);
  if (allHero?.count) {
    page.number = Math.ceil(allHero.count / 10);
  }
  console.log(allHero);
  return allHero;
}
