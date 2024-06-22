import React, { useState } from "react"
import { useFetchUsers } from "../../hooks/useFetchUsers"
import { User } from "../User/User"
import { Loader } from "../Loader/Loader"
export const Users = () => {
  const { data, isLoading, error } = useFetchUsers()

  return (
    <div>
      {isLoading && <Loader size={300} />}
      {error && <div> {error.message}</div>}
      {data?.map((user) => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}
