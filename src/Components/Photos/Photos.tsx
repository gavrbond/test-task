import React, { useEffect, useState } from "react"
import { useFetchPhoto } from "../../hooks/useFetchPhoto"
import styles from "./Photos.module.scss"
import starIcon from "../../icon/Star 1.png"
import starIconFav from "../../icon/Star 2.png"
import Modal from "../Modal/Modal"
import { Loader } from "../Loader/Loader"
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks"
import { addFavoriteImage } from "../../redux/slice/favoritePhotos"
type PhotosProps = {
  selectedAlbum: string
}
type ParamsHandle = {
  imageUrl: string
  title: string
}
export const Photos = ({ selectedAlbum }: PhotosProps) => {
  const { data, isLoading, error } = useFetchPhoto(selectedAlbum)
  const [modalUrl, setModalUrl] = useState<string | null>(null)
  const favoritePhotos = useAppSelector((state) => state.favoritePhotos.images)
  const dispatch = useAppDispatch()
  const handleAddImage = (photoObj: ParamsHandle) => {
    dispatch(
      addFavoriteImage({ url: photoObj.imageUrl, title: photoObj.title })
    )
  }
  const openModal = (imageUrl: string) => {
    setModalUrl(imageUrl)
  }
  const closeModal = () => {
    setModalUrl(null)
  }
  const isFavorite = (imageUrl: string) => {
    return favoritePhotos.some((photo) => photo.url === imageUrl)
  }
  console.log(modalUrl)
  return (
    <div className={styles.root}>
      {isLoading && <Loader size={300} />}
      {data?.map((photo) => {
        return (
          <div key={photo.id} className={styles.imgContainer}>
            <div
              className={styles.starIcon}
              onClick={() =>
                handleAddImage({ imageUrl: photo.url, title: photo.title })
              }
            >
              {isFavorite(photo.url) ? (
                <img alt='module' className={styles.icon} src={starIconFav} />
              ) : (
                <img alt='module' className={styles.icon} src={starIcon} />
              )}
            </div>
            <div className={styles.tooltip}>{photo.title}</div>
            <div className='sd' onClick={() => openModal(photo.url)}>
              <img src={photo.url} />
            </div>
          </div>
        )
      })}
      {modalUrl && <Modal imageUrl={modalUrl} closeModal={closeModal} />}
    </div>
  )
}
