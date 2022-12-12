import React from 'react'
import { Layout } from '../components/Layout'
import { FavsWithQuery } from '../containers/FavsWithQuery/intex'

export default () => {
  return (
    <Layout title='Petgram - Tus favororitos' subtitle='Aquí puedes encontrar tus favoritos'>
      <FavsWithQuery />
    </Layout>
  )
}
