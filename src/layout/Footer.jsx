import React from 'react'

import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <Box display='flex' margin={3} height='100px'>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: '2.5rem',
          }}>
          <Typography
            variant='body1'
            component='p'
            sx={{
              marginRight: '2rem',
              fontFamily: 'Cardo',
              fontSize: '1.2rem',
            }}>
            MyMortgageBoutique
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography variant='body1' component='p' noWrap>
            Fabrice Martignat &copy; {year}
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
          }}>
          <IconButton
            href='http://www.google.com'
            target='_blank'
            rel='noreferrer'>
            <LinkedInIcon
              sx={{ fontSize: 30, color: 'white', margin: '1rem' }}
            />
          </IconButton>
          <IconButton
            href='http://www.google.com'
            target='_blank'
            rel='noreferrer'>
            <GitHubIcon sx={{ fontSize: 30, color: 'white', margin: '1rem' }} />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

export default Footer
