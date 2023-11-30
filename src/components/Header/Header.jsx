import Search from "../Search/Search";
import "../styles/variables.scss";

const Header = () => {
  return (
      <div className="container">
        <div className='header'>

          <div className="header__title">
            <a>Главная</a>
            <a>Расписание</a>
            <a>Методические указания</a>
            <a>Блог</a>
          </div>

           <Search />

        </div>
    </div>
  )
}

export default Header