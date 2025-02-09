import imgLogo from '../../../../public/StarWar Hero Table.jpg';
import style from './header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <img src={imgLogo}></img>
    </div>
  );
}
export default Header;
