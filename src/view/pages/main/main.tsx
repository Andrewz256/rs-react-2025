import { Component } from 'react';
import style from './main.module.css';
import Input from '../../components/common/input/input';
import Button from '../../components/common/button/button';
import {
  ElementsView,
  NumberPageView,
} from '../../components/searchElement/searchElement';
import getStarWarsHero from '../../../data/api/getStarWarsHero';

export class Main extends Component {
  state = {
    data: [],
    loading: null,
    pageNum: 1,
  };
  componentDidMount(): void {
    getStarWarsHero(this.state.pageNum).then((res) => {
      this.setState({ data: res?.results, loading: true, pageNum: res?.count });
    });
  }
  render() {
    return (
      <div className={style.mainPage}>
        <div className={style.searchField}>
          <Input
            placeholder={'written here...'}
            classElement={style.searchInput}
            idElement={'searchInput'}
          />
          <Button
            name={'Search'}
            classElement={style.searchButton}
            idElement={'searchButton'}
          />
        </div>
        <div className={style.resultField}>
          <div className={style.resultList}>
            <ElementsView heroes={this.state.data} />
          </div>
          <div className={style.resultPagePagination}>
            <NumberPageView number={this.state.pageNum} />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
