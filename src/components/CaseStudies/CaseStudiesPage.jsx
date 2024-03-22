import React, { useState } from 'react'
import CaseStudyCard from './CaseStudyCard'
import Grid from '@mui/material/Unstable_Grid2'

const CaseStudiesPage = ({ posts }) => {
  return (
    <>
      {/* // map over data.posts and render a CaseStudyCard for each post */}
      <Grid container spacing={3}>
        {posts?.map((post) => {
          return (
            <Grid item xs={12} md={4} key={post.id}>
              <CaseStudyCard post={post} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default CaseStudiesPage
