import React from "react"
import { Button } from "../Button/Button"
import { NavLink } from "react-router-dom"
import styles from "./Nav.module.scss"
type ButtonName = {
  name: string
  path: string
}
const buttonName: ButtonName[] = [
  { name: "Каталог", path: "/" },
  { name: "Избранное", path: "/favorites" },
]
export const Nav = () => {
  return (
    <nav className={styles.root}>
      {buttonName.map((item, index) => {
        return (
          <div key={index} className={styles.btn}>
            <Button path={item.path}>{item.name}</Button>
          </div>
        )
      })}
    </nav>
  )
}
