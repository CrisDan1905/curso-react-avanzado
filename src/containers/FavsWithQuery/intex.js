import React from 'react'
import { ListOfFavs } from '../../components/ListOfFavs'
import { useGetFavorites } from '../../hooks/useGetFavorites'

export const FavsWithQuery = () => {
  const { loading, data, error } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { favs } = data

  return <ListOfFavs favs={favs} />
}
