import { MENU } from "../utils/constants";

import "../styles/index.scss";

import teacher from "../Images/teacher.jpg"

const Home = () => {
  return (
    <div className="home">
      <div className="container">

          <div  className="menu">
            {MENU.map(({link, name}) => 
              <div key={link}>
                <div to={`/${link}`}>{name}</div>
              </div>
            )}
          </div>
        
        <div className="home__title">
          <img src={teacher} alt="teacher" className="home__img" />
          <div className="home__subtitle">
            <h1>Обо мне</h1>
            <p>Мой профессиональный путь начался совсем недавно. Всего три года назад. Я окончила Ставропольский Педагогический Институт с красным дипломом и получила квалификацию учитель начальных классов. Передо мной открылся удивительный мир. Мир знаний, мир маленьких «почемучек». Чтобы научится лучше понимать детей, я прошла переквалификацию по программе дополнительного образования «Педагогика и психология в образовании» и курсы повышения квалификации в Государственном бюджетном учреждении дополнительного профессионального образования Ставропольском краевом институте развития образования, повышения квалификации и переподготовки работников образования по дополнительной профессиональной программе Совершенствование образовательной деятельности в начальной школе в соответствии с требованиями ФГОС НОО и профессионального стандарта педагога.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home