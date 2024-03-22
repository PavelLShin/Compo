import React, { useEffect, useState } from 'react'
import styles from './CardPage.module.css'
import Boot1 from '../img/Boot1.svg'
import Left from '../img/ArrowLeft.svg'
import Right from '../img/ArrowRight.svg'
import Boot2 from '../img/Boot2.svg'
import Boot3 from '../img/Boot3.svg'
import Boot4 from '../img/Boot4.svg'
import Boot5 from '../img/Boot5.svg'
import Button from '../UI/Button'
import BtnImg from '../img/BtnImg.svg'
import LikeDeafult from '../img/LikeBtnDeafult.svg'
import Minus from '../img/Minus.svg'
import Plus from '../img/Plus.svg'
import BtnLike from '../img/BtnLike.svg'

function CardPage({ basket, setBasket, priceAll, count, setCount }) {
  const [packages, setPackages] = useState(false)
  const [like, setLike] = useState(false)
  const [cardImg, setCardImg] = useState(Boot1)
  const [position, setPosition] = useState(-80)
  useEffect(() => {
    packages ? setCount(count * 0 + 12) : setCount(count * 0 + 1)
  }, [packages])

  let i = count.toString().split('').length
  console.log(count.toString().split(''))
  const clickRight = () => {
    return position > 0 ? false : setPosition(position + 80)
  }
  const checkPackages = () => {
    setPackages(!packages)
  }
  const clickLeft = () => {
    return position > -400 ? setPosition(position - 80) : false
  }
  const fnBasketCange = () => {
    setBasket(true)
    packages ? setCount(count * 0 + 12) : setCount(count * 0 + 1)
  }

  const pricePlus = () => {
    packages ? setCount(count + 12) : setCount(count + 1)
    return count
  }

  const priceMinus = () => {
    if (count <= 1) {
      setBasket(false)
    }
    packages ? setCount(count - 12 > 0 ? count - 12 : 12) : setCount(count - 1)
    return count < 1 ? 1 : count
  }
  return (
    <div className={styles.card_container}>
      <div className={styles.card__content}>
        <div className={styles.card__product_container}>
          <div className={styles.product_container__menu}>
            <div className={styles.product_container__menu_item}>
              <h2>Каталог</h2>
              <h2>/</h2>
            </div>
            <div className={styles.product_container__menu_item}>
              <h2>Обувь</h2>
              <h2>/</h2>
            </div>
            <div className={styles.product_container__menu_item}>
              <h2>Кроссовки</h2>
              <h2>/</h2>
            </div>
            <div className={styles.product_container__menu_item}>
              <h2>Беговые</h2>
              <h2>/</h2>
            </div>
          </div>
          <div className={styles.product_container__product_name}>
            <h2>Кроссовки мужские Skechers Sunny Dale</h2>
          </div>
        </div>
        <div className={styles.product_container__info}>
          <div className={styles.product_container__photo}>
            <img
              src={cardImg}
              alt="Boot1"
              width={400}
              height={400}
              style={{ borderRadius: '8px' }}
            />
            <div className={styles.photo_carusel__container}>
              <div
                className={styles.photo_carusel__arrow}
                onClick={() => clickLeft()}
              >
                <img src={Left} alt="Left" width={32} height={32} />
              </div>
              <div className={styles.photo_carusel__content_container}>
                <div
                  className={styles.photo_carusel__items_container}
                  style={{ right: `${position}px` }}
                >
                  <div className={styles.carusel_item}>
                    <img
                      alt="Boot2"
                      src={Boot2}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot2)}
                    />
                  </div>
                  <div className={styles.carusel_item}>
                    <img
                      alt="Boot3"
                      src={Boot3}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot3)}
                    />
                  </div>
                  <div className={styles.carusel_item}>
                    <img
                      alt="Boot4"
                      src={Boot4}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot4)}
                    />
                  </div>
                  <div className={styles.carusel_item}>
                    <img
                      alt="Boot5"
                      src={Boot5}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot5)}
                    />
                  </div>
                  <div className={styles.carusel_item}>
                    <img
                      style={{ borderRadius: `16px` }}
                      alt="Boot1"
                      src={Boot1}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot1)}
                    />
                  </div>
                  <div className={styles.carusel_item}>
                    <img
                      alt="Boot4"
                      src={Boot4}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot4)}
                    />
                  </div>
                  <div className={styles.carusel_item}>
                    <img
                      alt="Boot5"
                      src={Boot5}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot5)}
                    />
                  </div>
                  <div className={styles.carusel_item}>
                    <img
                      style={{ borderRadius: `16px` }}
                      alt="Boot1"
                      src={Boot1}
                      width={64}
                      height={64}
                      onClick={() => setCardImg(Boot1)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.photo_carusel__arrow} onClick={clickRight}>
                <img src={Right} alt="Right" width={32} height={32} />
              </div>
            </div>
          </div>
          <div className={styles.product_container__description}>
            <div className={styles.product_container__description_up}>
              <div className={styles.description_up__left}>
                <div className={styles.description_up__left_price}>
                  <div className={styles.left_price__up}>
                    <h2>{`${
                      count > 0 ? priceAll * count : priceAll
                    } цена без скидки`}</h2>
                    <div className={styles.up__bottom}>
                      <h2>{`${
                        ((count > 0 ? priceAll * count : priceAll) / 100) * 85
                      } ₽`}</h2>
                      <div className={styles.up_bottom__procent}>
                        <h2>-15%</h2>
                      </div>
                    </div>
                  </div>
                  <div className={styles.left_price__down}>
                    <div className={styles.left_price__down_left}>
                      <h2>{`${packages ? '12 штук в уп' : '1 шт'}`}</h2>
                    </div>
                    <div className={styles.left_price__down_right}>
                      {packages ? (
                        <div
                          className={styles.down_right__btn}
                          onClick={checkPackages}
                        >
                          <div className={styles.btn_circle}></div>
                        </div>
                      ) : (
                        <div
                          className={styles.down_right__btn_deafult}
                          onClick={() => setPackages(true)}
                        >
                          <div className={styles.btn_circle}></div>
                        </div>
                      )}

                      <h2>Заказ упаковкой</h2>
                    </div>
                  </div>
                </div>
                <div className={styles.description_up__left_delivery}>
                  <div className={styles.delivery__items}>
                    <h2>Завтра</h2>
                    <h3>Доставка</h3>
                  </div>
                  <div className={styles.delivery__items}>
                    <h2>7 шт.</h2>
                    <h3>Тарасовка</h3>
                  </div>
                  <div className={styles.delivery__items}>
                    <h2>7 шт.</h2>
                    <h3>Тарасовка</h3>
                  </div>
                </div>
                <div className={styles.description_up__left_btn}>
                  {basket ? (
                    <div className={styles.left_btn__quantity}>
                      <div className={styles.quantity__change}>
                        <img
                          src={Minus}
                          alt="Minus"
                          width={24}
                          height={24}
                          onClick={priceMinus}
                        />
                      </div>
                      <div className={styles.quantity__content}>
                        <h2>{`${count} штук${
                          i > 1
                            ? count.toString().split('')[i - 2] == 1
                              ? ''
                              : count.toString().split('')[i - 2] == 20
                              ? ''
                              : count.toString().split('')[i - 1] == 1
                              ? 'а'
                              : count.toString().split('')[i - 1] > 1 &&
                                count.toString().split('')[i - 1] < 5
                              ? 'и'
                              : count.toString().split('')[i - 1] > 5 &&
                                count.toString().split('')[i - 1] <= 9
                              ? ''
                              : ''
                            : count == 1
                            ? 'a'
                            : count > 1 && count < 5
                            ? 'и'
                            : count > 4 && count < 9
                            ? ''
                            : ''
                        }`}</h2>
                      </div>
                      <div className={styles.quantity__change}>
                        <img
                          src={Plus}
                          alt="Plus"
                          width={24}
                          height={24}
                          onClick={pricePlus}
                        />
                      </div>
                    </div>
                  ) : (
                    <div onClick={fnBasketCange}>
                      <Button
                        width={284}
                        height={56}
                        img={BtnImg}
                        txt={'В корзину'}
                      />
                    </div>
                  )}

                  <div
                    className={styles.left_btn__like}
                    onClick={() => setLike(!like)}
                  >
                    {like ? (
                      <img
                        src={BtnLike}
                        alt="LikeDeafult"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <img
                        src={LikeDeafult}
                        alt="LikeDeafult"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.description_up__right}>
                <h2>Характеристики</h2>
                <div className={styles.up_right__txt_container}>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Код поставщика</h3>
                    </div>
                    <div className={styles.txt__item}>
                      <h2>ELC0200000696</h2>
                      <h3>Артикул</h3>
                    </div>
                  </div>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Код РАЭК</h3>
                    </div>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Код ЕТМ</h3>
                    </div>
                  </div>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>Electric used</h2>
                      <h3>Бренд</h3>
                    </div>
                    <div className={styles.txt__item}>
                      <h2>ELC00696</h2>
                      <h3>Серия</h3>
                    </div>
                  </div>
                  <div className={styles.txt__items}>
                    <div className={styles.txt__item}>
                      <h2>ELC0200000696</h2>
                      <h3>Код производителя </h3>
                    </div>
                    <div className={styles.txt__item}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product_container__description_down}>
              <h2>Описание товара</h2>
              <h3>
                Создание приверженного покупателя специфицирует неопровержимый
                комплексный анализ ситуации. CTR <br></br> существенно
                индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на
                потребителя определяет <br></br> возрастающий интеграл по
                поверхности, что известно даже школьникам. Отсюда естественно
                следует, что <br></br>
                коммуникация уравновешивает косвенный фактор коммуникации. Поле
                направлений естественно допускает <br></br> экспериментальный
                скачок функции, таким образом сбылась мечта идиота - утверждение
                полностью доказано. <br></br>Арифметическая прогрессия
                притягивает линейно зависимый пул лояльных изданий.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPage
