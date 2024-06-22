import React from "react"
import { Photo } from "../type/photoTypes"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const photoUrl = "/photos"
type useFetchPhotoResult = {
  data?: Photo[]
  isLoading: boolean
  error: Error | null
}
const requestPhotos = async (albumId: string): Promise<Photo[]> => {
  const response = await axios.get<Photo[]>(`${photoUrl}/${albumId}`)
  return response.data
}
export const useFetchPhoto = (albumId: string): useFetchPhotoResult => {
  const { data, isLoading, error } = useQuery<Photo[], Error>({
    queryKey: ["photos", albumId],
    queryFn: () => requestPhotos(albumId),
    enabled: !!albumId,
  })
  return { data, isLoading, error }
}
