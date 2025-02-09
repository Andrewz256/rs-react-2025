import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import style from './main.module.css';
import Input from '../../components/common/input/input';
import Button from '../../components/common/button/button';
import { ResultsView } from '../../components/result/resultView';
import getStarWarsHero from '../../../data/api/getStarWarsHero';
import { HeroDataType, HeroSearchType } from '../../../data/types/heroWorld';
import Header from '../../components/header/header';

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
  const [searchData, setSearchData] =
    useState<HeroSearchType>(initialSearchState);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrenPage] = useState(1);

  async function getHero(searchQuery: object) {
    await getStarWarsHero(searchQuery)
      .then((res) => {
        if (res) {
          setStateData({
            data: res.results,
            pageNum: res.count,
            next: res.next,
            previous: res.previous,
          });
        }
        return res;
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    setLoading(true);
    async function fetchAllHero() {
      await getHero({ all: 'all' });
      setLoading(false);
    }
    fetchAllHero();
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
    await getHero(searchQuery);
    setLoading(false);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchData({ search: value });
  }
  useEffect(() => {
    setLoading(true);
    async function fetchHeroPage() {
      await getHero({ pageNumber: currentPage });
      setLoading(false);
    }
    fetchHeroPage();
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className={style.mainPage}>
      <Header />
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
          <ResultsView
            results={stateData.data}
            count={stateData.pageNum}
            next={stateData.next}
            previous={stateData.previous}
            current={currentPage}
            setCurrent={setCurrenPage}
          />
        </div>
      )}
    </div>
  );
}
export default Main;
