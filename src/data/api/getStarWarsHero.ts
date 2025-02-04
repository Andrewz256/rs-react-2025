import { IHeroResponse } from '../types/interfaces/heroWorld';
import StarWarsCred from '../types/starwarscred';
import { SearchProps } from '../types/interfaces/heroWorld';

async function getStarWarsHero(
  props: SearchProps
): Promise<IHeroResponse | null> {
  console.log(props);
  let url = '';

  if (props.pageNumber) {
    url = `${StarWarsCred.API_URL}/people/?page=${props.pageNumber}`;
  }
  if (props.heroName) {
    url = `${StarWarsCred.API_URL}/people/?search=${props.heroName}`;
  }

  try {
    const response = await fetch(url, { method: 'GET' });
    const heroData = await response.json();
    console.log(heroData);
    return heroData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getStarWarsHero;
