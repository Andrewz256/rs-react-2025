import { ChangeEvent, Component, FormEvent } from 'react';
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
    loading: 1,
    pageNum: 1,
    search: '',
  };
  componentDidMount(): void {
    this.setState({ loading: 1 });
    const pageNumber = { pageNumber: this.state.pageNum };
    getStarWarsHero(pageNumber).then((res) => {
      this.setState({
        data: res?.results,
        loading: 0,
        pageNum: res?.count,
      });
    });
  }
  handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ loading: 1 });
    const searchStr = new FormData(e.currentTarget)
      .get('searchInput')
      ?.toString();
    if (searchStr) {
      getStarWarsHero({ heroName: searchStr }).then((res) => {
        this.setState({
          data: res?.results,
          loading: 0,
          pageNum: res?.count,
        });
      });
    }
  };

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    this.setState({ search: value });
  }

  render() {
    return (
      <div className={style.mainPage}>
        <form
          className={style.searchForm}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div className={style.searchField}>
            <Input
              placeholder="written here..."
              classElement={style.searchInput}
              idElement="searchInput"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                this.handleChange(e)
              }
            />
            <Button
              name={'Search'}
              classElement={style.searchButton}
              idElement="searchButton"
              type="submit"
            />
          </div>
        </form>
        {this.state.loading === 1 ? (
          <div className={style.loader}>loading</div>
        ) : (
          <div className={style.resultField}>
            <div className={style.resultList}>
              <ElementsView heroes={this.state.data} />
            </div>
            <div className={style.resultPagePagination}>
              <NumberPageView number={this.state.pageNum} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Main;
