import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { User } from "../type/userTypes"
const url = "/users/"

type UserFetchResult = {
  data?: User[]
  isLoading: boolean
  error: Error | null
}
const requestData = async (url: string): Promise<User[]> => {
  const response = await axios.get<User[]>(url)
  return response.data
}

export const useFetchUsers = (): UserFetchResult => {
  const { data, isLoading, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: () => requestData(url),
  })
  return { data, isLoading, error }
}
