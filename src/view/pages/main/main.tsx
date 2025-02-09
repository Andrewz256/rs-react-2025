import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import style from './main.module.css';
import Input from '../../components/common/input/input';
import Button from '../../components/common/button/button';
import { ElementsView } from '../../components/resultElement/resultElement';
import getStarWarsHero from '../../../data/api/getStarWarsHero';
import {
  HeroDataType,
  HeroSearchType,
} from '../../../data/types/interfaces/heroWorld';

const initialDataState = {
  data: [],
  pageNum: 1,
  next: '',
  previous: '',
};
const initialSearchState = {
  search: '',
};
export function Main() {
  const [stateData, setStateData] = useState<HeroDataType>(initialDataState);
  //const [pageNUm, setPageNum] = useState<HeroDataType>(initialDataState);
  const [searchData, setSearchData] =
    useState<HeroSearchType>(initialSearchState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    async function fetchHero() {
      await getStarWarsHero({ all: 'all' })
        .then((res) => {
          if (res) {
            setStateData({
              data: res.results,
              pageNum: res.count,
              next: res.next,
              previous: res.previous,
            });
          }

          // return res?.count;
        })
        .catch((error) => console.error('Error fetching data:', error));

      setLoading(false);
    }

    fetchHero();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const searchStr = new FormData(e.currentTarget)
      .get('searchInput')
      ?.toString();
    let searchQuery: object = {};
    if (searchStr !== '') {
      searchQuery = { heroName: searchStr };
    } else {
      searchQuery = { pageNumber: 1 };
    }
    await getStarWarsHero(searchQuery).then((res) => {
      if (res) {
        setStateData({
          data: res.results,
          pageNum: res.count,
          next: res.next,
          previous: res.previous,
        });
      }
      setLoading(false);
    });
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchData({ search: value });
  }

  return (
    <div className={style.mainPage}>
      <form className={style.searchForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.searchField}>
          <Input
            placeholder="write here..."
            classElement={style.searchInput}
            idElement="searchInput"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            value={searchData.search}
          />
          <Button
            name={'Search'}
            classElement={style.searchButton}
            idElement="searchButton"
            type="submit"
          />
        </div>
      </form>
      {loading && stateData.data ? (
        <div className={style.loader}>loading</div>
      ) : (
        <div className={style.resultField}>
          <ElementsView
            results={stateData.data}
            count={stateData.pageNum}
            next={stateData.next}
            previous={stateData.previous}
          />
        </div>
      )}
    </div>
  );
}
export default Main;
