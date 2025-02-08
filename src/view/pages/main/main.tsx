import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import style from './main.module.css';
import Input from '../../components/common/input/input';
import Button from '../../components/common/button/button';
import {
  ElementsView,
  NumberPageView,
} from '../../components/searchElement/searchElement';
import getStarWarsHero from '../../../data/api/getStarWarsHero';
import { HeroDataType } from '../../../data/types/interfaces/heroWorld';

const initialDataState = {
  data: [],
  pageNum: 1,
  search: '',
};
export function Main() {
  const [stateData, setStateData] = useState<HeroDataType>(initialDataState);
  //const [pageNUm, setPageNum] = useState<HeroDataType>(initialDataState);
  // const [searchData, setSearchData] = useState<HeroDataType>(initialDataState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    async function fetchHero() {
      await getStarWarsHero({ all: 'all' }).then((res) => {
        setStateData({
          data: res?.results,
          pageNum: res?.count,
        });
        // return res?.count;
      });

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
    console.log(searchStr);
    if (searchStr !== '') {
      await getStarWarsHero({ heroName: searchStr }).then((res) => {
        setStateData({
          data: res?.results,
          pageNum: res?.count,
        });
      });
      setLoading(false);
    } else {
      const pageNumber = { pageNumber: 1 };
      await getStarWarsHero(pageNumber).then((res) => {
        setStateData({
          data: res?.results,
          pageNum: res?.count,
        });
        setLoading(false);
      });
    }
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setStateData({ search: value });
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
          <div className={style.resultList}>
            <ElementsView heroes={stateData.data} />
          </div>
          <div className={style.resultPagePagination}>
            <NumberPageView pageCount={stateData.pageNum} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Main;
