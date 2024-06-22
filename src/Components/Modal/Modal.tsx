import React, { useEffect } from "react"
import styles from "./Modal.module.scss"
import { IoMdClose } from "react-icons/io"

type ModalProps = {
  imageUrl: string
  closeModal: () => void
}
const ModalComponent = ({ imageUrl, closeModal }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add(styles.noScroll)
    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [])
  return (
    <div className={styles.root}>
      <IoMdClose className={styles.iconClose} onClick={closeModal} />
      <div className={styles.modal}>
        <img src={imageUrl} alt='modal' className={styles.image} />
      </div>
    </div>
  )
}
export default ModalComponent
