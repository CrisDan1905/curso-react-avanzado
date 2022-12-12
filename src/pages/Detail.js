import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = () => {
  const { detailId } = useParams()

  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
