import {
  AllHero,
  IHero,
  PageNum,
} from '../../../data/types/interfaces/heroWorld';
import style from './searchElement.module.css';

export function ElementsView(heroes: AllHero) {
  const heroArray = Object.entries(heroes);
  const hero = heroArray.map((hero) =>
    hero[1].map((data: IHero) => (
      <div key={data.name} className={style.resultItem}>
        <p className={style.resultItemColumn}>{data.name}</p>
        <p className={style.resultItemColumn}>{data.gender}</p>
        <p className={style.resultItemColumn}>{data.height}</p>
        <p className={style.resultItemColumn}>{data.mass}</p>
      </div>
    ))
  );
  return (
    <section className={style.results}>
      <header className={style.resultItem}>
        <div className={style.resultItemColumn}>Name</div>
        <div className={style.resultItemColumn}>Gender</div>
        <div className={style.resultItemColumn}>Height</div>
        <div className={style.resultItemColumn}>Mass</div>
      </header>
      {hero}
    </section>
  );
}

export function NumberPageView(pageCount: PageNum) {
  const pageNum = Math.ceil(pageCount.number / 10);
  const pageNumArray: number[] = [];
  for (let i = 1; i <= pageNum; i++) {
    pageNumArray.push(i);
  }
  const listPage = pageNumArray.map((item) => (
    <li key={item} className={style.listPageItem}>
      {item}
    </li>
  ));

  return <ul>{listPage}</ul>;
}
