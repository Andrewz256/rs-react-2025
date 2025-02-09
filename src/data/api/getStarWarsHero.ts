import { IHeroResponse } from '../types/heroWorld';
import StarWarsCred from '../types/starwarscred';
import { SearchProps } from '../types/heroWorld';

async function getStarWarsHero(
  props: SearchProps
): Promise<IHeroResponse | null> {
  let url = '';

  if (props.pageNumber) {
    url = `${StarWarsCred.API_URL}/people/?page=${props.pageNumber}`;
  }
  if (props.heroName) {
    url = `${StarWarsCred.API_URL}/people/?search=${props.heroName}`;
  }
  if (props.all) {
    url = `${StarWarsCred.API_URL}/people/`;
  }

  try {
    console.log(url);
    const response = await fetch(url, { method: 'GET' });
    const heroData = await response.json();
    return heroData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getStarWarsHero;
