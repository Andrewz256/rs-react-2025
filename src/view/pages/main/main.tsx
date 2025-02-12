import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import style from './main.module.css';
import Input from '../../components/common/input/input';
import Button from '../../components/common/button/button';
import { ResultsView } from '../../components/result/resultView';
import getStarWarsHero from '../../../data/api/getStarWarsHero';
import {
  HeroDataType,
  HeroSearchType,
  SetSearchProps,
} from '../../../data/types/heroWorld';
import Header from '../../components/header/header';
import { useLocalStorage } from '../../../data/hooks/useLocalStorage';

const initialDataState = {
  data: [],
  pageNum: 1,
  next: '',
  previous: '',
};
const initialSearchState = {
  search: '',
};
export function Main({ searchParams, setSearchParams }: SetSearchProps) {
  const [stateData, setStateData] = useState<HeroDataType>(initialDataState);
  const [searchData, setSearchData] =
    useState<HeroSearchType>(initialSearchState);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrenPage] = useState(1);
  const [searching, setSearching] = useState<boolean>(false);
  const [currentSearchLS, setCurrentSearchLS] = useLocalStorage(
    'searchStr',
    ''
  );
  if (searchParams) {
    console.log(searchParams);
  }
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
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const searchStr = new FormData(e.currentTarget)
      .get('searchInput')
      ?.toString();

    if (searchStr) {
      await getHero({ heroName: searchStr });
    } else {
      await getHero({ pageNumber: 1 });
    }
    setLoading(false);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setCurrenPage(1);
    setCurrentSearchLS(value);
    setSearchData({ search: value });
  }
  useEffect(() => {
    setLoading(true);
    async function fetchHeroPage() {
      if (searchData.search) {
        console.log(`Searching=${searching} currentPage=${currentPage}`);
        setSearchParams(`search=${searchData.search}&page=${currentPage}`);
        if (searching) {
          await getHero({ pageNumber: currentPage, search: searchData.search });
        } else {
          await getHero({ heroName: searchData.search });
          setSearching(true);
        }
      } else {
        if (searching) {
          setSearchParams(`page${currentPage}`);
          await getHero({ pageNumber: currentPage });
        } else {
          if (currentSearchLS) {
            setSearchData({
              search: currentSearchLS,
            });
          } else {
            await getHero({ all: 'all' });
            setSearching(true);
          }
        }
      }
      setLoading(false);
    }
    fetchHeroPage();
  }, [currentPage, searching, searchData, currentSearchLS, setSearchParams]);

  return (
    <div className={style.mainPage}>
      <Header />
      <form className={style.searchForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.searchField}>
          <Input
            value={searchData.search}
            placeholder="write here..."
            classElement={style.searchInput}
            idElement="searchInput"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
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
