import React from 'react'
import styles from './Button.module.css'

function Button({ width, height, img, txt }) {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={styles.button_container}
    >
      <img src={img} alt="img" />
      <h2>{txt}</h2>
    </div>
  )
}

export default Button
