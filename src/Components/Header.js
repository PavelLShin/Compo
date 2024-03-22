import styles from './Header.module.css'
import Vector from '../img/Vector.svg'
import Name from '../img/Name.svg'
import Button from '../UI/Button'
import Menu from '../img/Menu.svg'
import Exit from '../img/Exit.svg'
import Search from '../img/Search.svg'
import Call from '../img/Call.svg'
import LikeDeafult from '../img/LikeDeafult.svg'
import Like from '../img/Like.svg'
import PriceImg from '../img/PriceImg.svg'
import Avatar from '../img/Avatar.svg'
import String from '../img/String.svg'
import Manager from '../img/Manager.svg'
import Procent from '../img/Procent.svg'
import { useState } from 'react'

function Header({ setBasket, priceAll, count, setCount }) {
  const [value, setValue] = useState('')
  const [like, setLike] = useState(false)

  return (
    <div className={styles.header_container}>
      <div className={styles.header_up}>
        <div className={styles.header_up__brand}>
          <img src={Vector} alt="Name" width={27.99} height={28} />
          <img src={Name} alt="Vector" width={107.55} height={24.56} />
        </div>
        <Button width={127} height={48} img={Menu} txt={'Меню'} />
        <form>
          <input
            placeholder="Название запроса"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <img
            src={Exit}
            alt="Exit"
            width={24}
            height={24}
            onClick={() => setValue('')}
          />
          <img src={Search} alt="MGlass" width={24} height={24} />
        </form>
        <div className={styles.header_up__call_like}>
          <div className={styles.call__img_container}>
            <img src={Call} alt="Call" width={32} height={32} />
          </div>
          <div className={styles.like__img_container}>
            <img
              src={like ? Like : LikeDeafult}
              alt="LikeDeafult"
              width={32}
              height={32}
              onClick={() => setLike(!like)}
            />
          </div>
        </div>
        <div
          className={styles.header_up__price}
          // onClick={() => setBasket(false)}
        >
          <img src={PriceImg} alt="PriceImg" width={24} height={24} />
          <div className={styles.price_txt}>
            <h2>{`${((priceAll * count) / 100) * 85} ₽`}</h2>
          </div>
        </div>
        <div className={styles.header_up__person_info}>
          <img src={Avatar} alt="Avatar" />
          <div className={styles.person_info__txt}>
            <h2>Ермаков Е.</h2>
          </div>
          <div className={styles.person_info__string_img}>
            <img src={String} alt="String" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className={styles.header_down}>
        <div className={styles.header_down__menu}>
          <h2>Мои заказы</h2>
          <h2>Сотрудники</h2>
          <h2>Шаблоны заказов</h2>
          <h2>Обращения</h2>
        </div>
        <div className={styles.header_down__blog}>
          <div className={styles.blog_manager}>
            <img alt="Manager" src={Manager} width={16} height={16} />
            <h2>Ваш менеджер</h2>
          </div>
          <div className={styles.header_down__stock}>
            <img src={Procent} alt="Procent" width={16} height={16} />
            <h2>Акции</h2>
          </div>
          <h2>Блог</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
