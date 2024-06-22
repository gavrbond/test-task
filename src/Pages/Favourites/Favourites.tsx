import React from "react"
import { Albums } from "../../Components/Albums/Albums"
import { Placeholder } from "../../Components/Placeholder/Placeholder"
import { useAppSelector } from "../../redux/reduxHooks"
import styles from "./Favourites.module.scss"
import starIcon from "../../icon/Star 2.png"
export const Favourites = () => {
  const favoritePhotos = useAppSelector((state) => state.favoritePhotos.images)

  return (
    <div className={styles.root}>
      {favoritePhotos.length === 0 ? (
        <Placeholder />
      ) : (
        <>
          {favoritePhotos.map((photo) => {
            return (
              <div className={styles.content}>
                <div className={styles.imgContainer}>
                  <img src={photo.url} alt='photo' className={styles.img} />
                  <div className={styles.star}>
                    <img
                      src={starIcon}
                      alt='star'
                      className={styles.iconStar}
                    />
                  </div>
                </div>

                <div className={styles.title}>{photo.title}</div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
