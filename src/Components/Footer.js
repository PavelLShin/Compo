import React from 'react'
import styles from './Footer.module.css'
import Vector from '../img/Vector.svg'
import Name from '../img/Name.svg'
import PDF from '../img/PDF.svg'
import Camera from '../img/Camera.svg'
import Info from '../img/Info.svg'
import YouTube from '../img/YouTube.svg'
import Brand from '../img/Brand.svg'

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer__top}>
        <div className={styles.footer_top__content}>
          <div className={styles.footer__top_left}>
            <div className={styles.top_left__img}>
              <img src={Vector} alt="Vector" width={39.9} height={40} />
              <img src={Name} alt="Name" width={154} height={35} />
            </div>
            <div className={styles.top_left__contacts}>
              <div className={styles.left_contacts__number}>
                <h2>8 800 841-95-95</h2>
                <h3>Служба поддержки</h3>
              </div>
              <div className={styles.left_contacts__email}>
                <h2>support@sport.ru</h2>
                <h3>Служба поддержки</h3>
              </div>
            </div>
          </div>
          <div className={styles.footer__top_right}>
            <h2>Вакансии</h2>
            <h2>Блог</h2>
            <h2>Акции</h2>
            <div className={styles.top_right__content_btn}>
              <h2>Предложить идею</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__middle}>
        <div className={styles.content_container}>
          <h2>Женщинам</h2>
          <div className={styles.content_container__items}>
            <h2>Одежда</h2>
            <h2>Обувь</h2>
            <h2>Аксессуары</h2>
            <h2>Белье</h2>
            <h2>Bra fitting</h2>
          </div>
        </div>
        <div className={styles.content_container}>
          <h2>Мужчинам</h2>
          <div className={styles.content_container__items}>
            <h2>Одежда</h2>
            <h2>Обувь</h2>
            <h2>Аксессуары</h2>
            <h2>Белье</h2>
          </div>
        </div>
        <div className={styles.content_container}>
          <h2>Детям</h2>
          <div className={styles.content_container__items}>
            <h2>Одежда</h2>
            <h2>Обувь</h2>
            <h2>Аксессуары</h2>
            <h2>Белье</h2>
            <h2>Игрушки</h2>
            <h2>Малыши</h2>
          </div>
        </div>
        <div className={styles.content_container}>
          <h2>Виды спорта</h2>
          <div className={styles.content_container__items}>
            <h2>Велоспорт</h2>
            <h2>Туризм</h2>
            <h2>Тренажеры и фитнес</h2>
            <h2>Командные виды спорта</h2>
            <h2>Самокаты</h2>
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom_container}>
        <div className={styles.footer__bottom}>
          <div className={styles.footer_bottom__top}>
            <div className={styles.footer_bottom__top_items}>
              <img src={PDF} alt="PDF" width={16} height={16} />
              <h2>PDF презентация</h2>
            </div>
            <div className={styles.footer_bottom__top_items}>
              <img src={Camera} alt="Camera" width={16} height={16} />
              <h2>Видео инструкция </h2>
            </div>
            <div className={styles.footer_bottom__top_items}>
              <img src={Info} alt="Info" width={16} height={16} />
              <h2>FAQ</h2>
            </div>
            <div className={styles.footer_bottom__top_items__active}>
              <img src={YouTube} alt="YouTube" width={16} height={16} />
              <h2>Мы на YouTube</h2>
            </div>
            <div className={styles.footer_bottom__top_items__txt}>
              <h2>Политика конфиденциальности </h2>
              <h2>Лицензионное соглашение</h2>
            </div>
          </div>
          <div className={styles.footer_bottom__middle}>
            <h2>
              Настоящая Политика обработки персональных данных разработана в
              соответствии с Конституцией Российской Федерации, Трудовым
              кодексом Российской Федерации, Гражданским кодексом Российской
              Федерации, Федеральным законом от<br></br> 27 июля 2006 года
              149-ФЗ "Об информации, информационных технологиях и о защите
              информации",
            </h2>
          </div>
          <div className={styles.footer_bottom__down}>
            <img src={Brand} alt="Brand" width={123.43} height={24} />
            <h2>Разработка платформы</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
