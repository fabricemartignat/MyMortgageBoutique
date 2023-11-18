import React from 'react'

import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { GET_POSTDETAIL } from '../queries/productQueries'
import CaseStudyDetail from '../components/CaseStudies/CaseStudy/CaseStudyDetail'
import Loading from '../components/CaseStudies/CaseStudy/Loading'
import NotFound from './NotFound'

import Error from '../components/Error'

const CaseStudy = () => {
  const { id } = useParams()

  const { loading, error, data } = useQuery(GET_POSTDETAIL, {
    variables: { id: id },
  })

  if (error) return <Error link='/case-studies' />

  if (loading) return <Loading />
  else {
    return <CaseStudyDetail postdetail={data.posts[0]} />
  }
}

export default CaseStudy
