import { AllHero, PageNum } from '../../../data/types/interfaces/heroWorld';
import style from './searchElement.module.css';

export function ElementsView({ heroes }: AllHero) {
  return (
    <section className={style.results}>
      <header className={style.resultItem}>
        <div className={style.resultItemColumn}>Name</div>
        <div className={style.resultItemColumn}>Gender</div>
        <div className={style.resultItemColumn}>Height</div>
        <div className={style.resultItemColumn}>Mass</div>
      </header>
      {heroes ? (
        heroes.map((data) => (
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
  );
}

export function NumberPageView({ pageCount }: PageNum) {
  const pageNumArray: number[] = [];
  if (pageCount) {
    const pageNum = Math.ceil(pageCount / 10);
    for (let i = 1; i <= pageNum; i++) {
      pageNumArray.push(i);
    }
  }

  return (
    <ul>
      {pageCount ? (
        pageNumArray.map((item) => (
          <li key={item} className={style.listPageItem}>
            {item}
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
}
