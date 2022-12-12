import { gql, useMutation } from '@apollo/client'

const mutationLikePhoto = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useMutationToggleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(mutationLikePhoto)
  return { mutation, mutationLoading, mutationError }
}
