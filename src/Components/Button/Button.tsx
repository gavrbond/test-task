import React, { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import styles from "./button.module.scss"
type ButtonProps = { children: ReactNode; path: string }
export const Button = ({ children, path }: ButtonProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${styles.btn} ${styles.active}` : styles.btn
      }
    >
      <button className={styles.btn}>{children}</button>
    </NavLink>
  )
}
