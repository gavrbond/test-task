import React from "react"
import { Outlet } from "react-router-dom"
import { Nav } from "../Nav/Nav"
import styles from "./Layout.module.scss"
export const Layout = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Nav />
        <Outlet />
      </div>
    </div>
  )
}
