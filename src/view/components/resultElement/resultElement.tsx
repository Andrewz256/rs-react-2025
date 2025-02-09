import { IHeroResponse } from '../../../data/types/interfaces/heroWorld';
import style from './resultElement.module.css';

export function ElementsView({
  results,
  count,
  next,
  previous,
}: IHeroResponse) {
  const pageNumArray: number[] = [];
  if (count) {
    const pageNum = Math.ceil(count / 10);
    for (let i = 1; i <= pageNum; i++) {
      pageNumArray.push(i);
    }
  }
  return (
    <>
      <section className={style.results}>
        <header className={style.resultItem}>
          <div className={style.resultItemColumn}>Name</div>
          <div className={style.resultItemColumn}>Gender</div>
          <div className={style.resultItemColumn}>Height</div>
          <div className={style.resultItemColumn}>Mass</div>
        </header>
        {results ? (
          results.map((data) => (
            <div key={data.name} className={style.resultItem}>
              <p className={style.resultItemColumn}>{data.name}</p>
              <p className={style.resultItemColumn}>{data.gender}</p>
              <p className={style.resultItemColumn}>{data.height}</p>
              <p className={style.resultItemColumn}>{data.mass}</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </section>
      <section className={style.resultPagePagination}>
        <ul>
          <li className={style.listPageItem}>
            <a href={previous}></a>
          </li>
          {count ? (
            pageNumArray.map((item) => (
              <li key={item} className={style.listPageItem}>
                {/* <a href={next}></a> */}
                {item}
              </li>
            ))
          ) : (
            <></>
          )}
          <li className={style.listPageItem}>
            <a href={next}></a>
          </li>
        </ul>
      </section>
    </>
  );
}
