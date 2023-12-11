import "../styles/info.scss"

import folder from "../Images/folder.png"
import laptop from "../Images/laptop.png"
import cursor from "../Images/cursor.png"
import map from "../Images/map.png"
import { INFO } from "../utils/constants"

const Info = () => {
  return (
    <div className="container">
        <div className="info">
            <p className="info__title">Для детей и родителей</p>

            <div className="info__blocks">
                <img src={folder} alt="img" />
                <div className="info__block">
                    {INFO.map(({id, title, subtitle}) => 
                        <div key={id}>
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                    )}
                </div>

                <img src={laptop} alt="img" />
                <div className="info__block">
                    <h3>Интерактивные занятия</h3>
                    <p>Для подготовки к экзаменам и получения дополнительных знаний</p>
                </div>

                <img src={cursor} alt="img" />
                <div className="info__block">
                    <h3>Список учебной литературы</h3>
                    <p>Для подготовки к экзаменам и получения дополнительных знаний</p>
                </div>

                <img src={map} alt="img" />
                <div className="info__block">
                    <h3>Беседа с руководителем</h3>
                    <p>Для подготовки к экзаменам и получения дополнительных знаний</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Info