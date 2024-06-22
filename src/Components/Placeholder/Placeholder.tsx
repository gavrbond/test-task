import React from "react"
import styles from "./Placeholder.module.scss"
import placeholder from "../../icon/placeholder.png"
export const Placeholder = () => {
  return (
    <div className={styles.root}>
      <img src={placeholder} alt='empty' />
      <div className={styles.title}>Список избранного пуст</div>
      <div className={styles.subTitle}>
        Добавляйте изображения, нажимая на звездочки
      </div>
    </div>
  )
}
