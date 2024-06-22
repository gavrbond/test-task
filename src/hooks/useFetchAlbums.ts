import React from "react"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import axios from "axios"
import { Album } from "../type/albumsTypes"
type useFetchAlbumsResult = {
  data?: Album[]
  isLoading: boolean
  error: Error | null
}
const albumsUrl = "/albums"
const requestAlbums = async (userID: string | null): Promise<Album[]> => {
  console.log(userID)
  const response = await axios.get<Album[]>(`${albumsUrl}/${userID}`)
  console.log(response)
  return response.data
}

export const useFetchAlbums = (userID: string | null): useFetchAlbumsResult => {
  const { data, isLoading, error } = useQuery<Album[], Error>({
    queryKey: ["albums", userID],
    queryFn: () => requestAlbums(userID),
    enabled: !!userID,
  })
  console.log(data)
  return { data, isLoading, error }
}
