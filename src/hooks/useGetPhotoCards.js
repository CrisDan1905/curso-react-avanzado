import { gql, useQuery } from '@apollo/client'

export const useGetPhotoCards = categoryId => {
  const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

  return useQuery(withPhotos, { variables: { categoryId } })
}
