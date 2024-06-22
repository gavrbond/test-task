import React, { useState } from "react"
import { useFetchAlbums } from "../../hooks/useFetchAlbums"
import styles from "./Albums.module.scss"
import { RiAddCircleFill } from "react-icons/ri"
import { BiSolidMinusCircle } from "react-icons/bi"
import { Photos } from "../Photos/Photos"
import { Loader } from "../Loader/Loader"
type AlbumsProps = {
  selectedUserId: string
}
export const Albums = ({ selectedUserId }: AlbumsProps) => {
  const [selectedAlbum, setSelectedAlbum] = useState<string[]>([])
  const { data, isLoading, error } = useFetchAlbums(selectedUserId)
  const handleAlbumClick = (albumId: string) => {
    setSelectedAlbum((prevAlbumId) =>
      prevAlbumId.includes(albumId)
        ? prevAlbumId.filter((Id) => Id !== albumId)
        : [...prevAlbumId, albumId]
    )
  }

  console.log(selectedAlbum)
  return (
    <>
      <div className={styles.root}>
        {isLoading && <Loader size={300} />}
        {error && <div>{error.message}</div>}
        {data?.map((album) => {
          const isSelected = selectedAlbum.includes(album.albumId)

          return (
            <div className={styles.content}>
              <div className={styles.albumWrapper}>
                {isSelected ? (
                  <BiSolidMinusCircle
                    onClick={() => handleAlbumClick(album.albumId)}
                    className={styles.icon}
                  />
                ) : (
                  <RiAddCircleFill
                    onClick={() => handleAlbumClick(album.albumId)}
                    className={styles.icon}
                  />
                )}
                <div className='sd'>{album.title}</div>
              </div>

              {isSelected && <Photos selectedAlbum={album.albumId} />}
            </div>
          )
        })}
      </div>
    </>
  )
}
