import React, { useState } from "react"
import { User as UserType } from "../../type/userTypes"
import styles from "./User.module.scss"
import { Albums } from "../Albums/Albums"
import { RiAddCircleFill } from "react-icons/ri"
import { BiSolidMinusCircle } from "react-icons/bi"

type Props = {
  user: UserType
}
export const User = ({ user }: Props) => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const handleClick = (userID: string) => {
    setSelectedUserId((prevId) => (prevId === userID ? null : userID))
  }
  return (
    <>
      <div className={styles.root}>
        {selectedUserId === user.id ? (
          <BiSolidMinusCircle
            onClick={() => handleClick(user.id)}
            className={styles.icon}
          />
        ) : (
          <RiAddCircleFill
            onClick={() => handleClick(user.id)}
            className={styles.icon}
          />
        )}
        <div>{user.name}</div>
      </div>
      {selectedUserId && <Albums selectedUserId={selectedUserId} />}
    </>
  )
}
