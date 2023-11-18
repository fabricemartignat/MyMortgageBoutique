import React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const CaseStudyCard = ({ post }) => {
  return (
    <Paper elevation={7} sx={{ width: { xs: '20rem', md: '25rem' } }}>
      <Card
        sx={{
          height: '35rem',
          width: { xs: '20rem', md: '26rem' },
          textAlign: 'center',
          backgroundColor: '#fafafa',
          position: 'relative',
        }}>
        <CardMedia
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '50%',
          }}>
          <img
            className='postImage'
            src={`/images/${post.image_url}`}
            alt={post.title}
          />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='p'
            color='#14202e'
            fontSize={16}
            textTransform='uppercase'
            fontWeight={550}
            lineHeight={1.5}
            marginBottom={2}>
            {post.title}
          </Typography>
          {/* <Typography component='p' color='text.secondary' fontSize={16}>
            {post.excerpt}
          </Typography> */}

          <Box
            sx={{
              position: 'absolute',
              bottom: '5rem',
              width: '90%',
              paddingTop: '1rem',
              borderTop: '1.5px solid rgb(199, 197, 197)',
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={300}>
                Area
              </Typography>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={300}>
                {post.area}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={300}
                lineHeight='12px'>
                Capital raised
              </Typography>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={300}>
                {post.capital_raised}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              position: 'absolute',
              bottom: '1rem',
            }}>
            <Link className='link-post' to={`/case-studies/${post.id}`}>
              Read More
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Paper>
  )
}

export default CaseStudyCard
