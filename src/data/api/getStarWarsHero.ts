import { IHeroResponse } from '../types/interfaces/heroWorld';
import StarWarsCred from '../types/starwarscred';

async function getStarWarsHero(
  pageNumber: number
): Promise<IHeroResponse | null> {
  const url = `${StarWarsCred.API_URL}/people/?page=${pageNumber}`;
  try {
    const response = await fetch(url, { method: 'GET' });
    const heroData = await response.json();
    return heroData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getStarWarsHero;
