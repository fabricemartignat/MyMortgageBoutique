import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'

const CaseStudyDetail = ({ postdetail }) => {
  const {
    title,
    scenario,
    challenges,
    solution,
    conclusion,
    image_url,
    area,
    capital_raised,
  } = postdetail

  // Scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [postdetail])

  return (
    <>
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
        <Typography component='p' fontSize='2rem' fontWeight={300}>
          CASE STUDY
        </Typography>
      </Box>

      <Container maxWidth='xl' sx={{ marginTop: '22rem' }}>
        <img
          className='postDetailImage'
          src={`/images/${image_url}`}
          alt='image'
        />

        <Box>
          <Typography
            gutterBottom
            variant='h1'
            sx={{
              fontSize: { xs: '0.9rem', md: '1.5rem' },
              color: '#14202e',
              textTransform: 'uppercase',
              fontWeight: 500,
              lineHeight: 1.5,
              marginBottom: 2,
              marginTop: 6,
            }}>
            {title}
          </Typography>

          <Box>
            <Box
              sx={{
                display: 'flex',
              }}>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={300}
                marginRight='1rem'>
                Area
              </Typography>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={400}
                color='#14202e'>
                {area}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',

                alignItems: 'center',
              }}>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={300}
                lineHeight='12px'
                marginRight='1rem'>
                Capital raised
              </Typography>
              <Typography
                variant='overline'
                component='p'
                fontSize={14}
                fontWeight={400}
                color='#14202e'>
                {capital_raised}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '90%',
            paddingTop: '1rem',
            borderTop: '1.5px solid rgb(199, 197, 197)',
            marginTop: '2rem',
          }}>
          <Box marginBottom={6}>
            <Typography variant='h3' fontSize={20} marginBottom={2}>
              Scenario
            </Typography>
            <Typography
              whiteSpace='pre-wrap'
              variant='p'
              fontSize={14}
              textAlign='justify'>
              {scenario}
            </Typography>
          </Box>
          <Box marginBottom={6}>
            <Typography variant='h3' fontSize={20} marginBottom={2}>
              Challenges
            </Typography>
            <Typography
              variant='p'
              fontSize={14}
              whiteSpace='pre-wrap'
              textAlign='justify'>
              {challenges}
            </Typography>
          </Box>
          <Box marginBottom={6}>
            <Typography variant='h3' fontSize={20} marginBottom={2}>
              Solution
            </Typography>
            <Typography
              variant='p'
              fontSize={14}
              whiteSpace='pre-wrap'
              textAlign='justify'>
              {solution}
            </Typography>
          </Box>
          <Box marginBottom={6}>
            <Typography variant='h3' fontSize={20} marginBottom={2}>
              Conclusion
            </Typography>
            <Typography
              variant='p'
              fontSize={14}
              whiteSpace='pre-wrap'
              textAlign='justify'>
              {conclusion}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Link className='link-post' to='/contact-us' relative='path'>
            Contact Us
          </Link>
        </Box>
      </Container>
    </>
  )
}

export default CaseStudyDetail
