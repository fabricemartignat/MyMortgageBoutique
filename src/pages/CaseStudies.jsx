// Helmet component from react-helmet-async to manage title and meta tags
import { Helmet } from 'react-helmet-async'

import { useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'

import { GET_POSTS } from '../queries/productQueries'

import CaseStudiesPage from '../components/CaseStudies/CaseStudiesPage'
import CaseStudyCard from '../components/CaseStudies/CaseStudyCard'
import CaseStudyFilter from '../components/CaseStudies/CaseStudyFilter'
import Loading from '../components/CaseStudies/CaseStudy/Loading'
import { Container, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Error from '../components/Error'

const CaseStudies = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  const [posts, setPosts] = useState()

  useEffect(() => {
    if (data) {
      setPosts(data.posts)
    }
  }, [data])

  function filterPosts(keyword) {
    if (keyword !== 'Select all' && keyword !== '') {
      const filteredPosts = data.posts.filter((post) => {
        return post.post_keywords.some(
          (postKeyword) => postKeyword.keyword.keyword === keyword
        )
      })
      setPosts(filteredPosts)
    } else {
      setPosts(data.posts)
    }
  }

  // if (!data) return

  if (error) return <Error link='case-studies' />
  if (loading) return <Loading />

  return (
    <>
      <Helmet>
        {' '}
        <title>MyMortgageBoutique | Case Studies</title>{' '}
      </Helmet>
      <Box
        sx={{
          height: '12rem',
          background: 'linear-gradient(to right bottom, #14202e, #3a597d)',
          color: 'white',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '5rem',
          left: '0',
          right: '0',
        }}>
        <Typography
          component='p'
          sx={{ fontWeight: 400, fontSize: { xs: '1.5rem', md: '2rem' } }}>
          MORTGAGE CASE STUDIES
        </Typography>
      </Box>

      <Container maxWidth='xl' sx={{ marginTop: '22rem' }}>
        <CaseStudyFilter filterPosts={filterPosts} />
        {/* // map over data.posts and render a CaseStudyCard for each post */}

        <CaseStudiesPage posts={posts} />
      </Container>
    </>
  )
}

export default CaseStudies
