import { gql, useQuery } from '@apollo/client'

export const useGetSinglePhotoCard = id => {
  const withPhotos = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

  return useQuery(withPhotos, { variables: { id } })
}
