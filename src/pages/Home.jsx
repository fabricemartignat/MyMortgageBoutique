// Helmet component from react-helmet-async to manage title and meta tags
import { Helmet } from 'react-helmet-async'

import { Grid, Typography, Card, Button, IconButton } from '@mui/material'

import Container from '@mui/material/Container'

//Mui Icons
import PaletteIcon from '@mui/icons-material/Palette'
import HandshakeIcon from '@mui/icons-material/Handshake'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import React from 'react'

import HomeCard from '../components/Home/HomeCard'
import Accordion from '../components/Home/Accordion'
import CardExpert from '../components/Home/CardExpert'

//Import data for Cards

// card messages

import { cardText } from '../data-ui'

// card experts
import { cardExpert } from '../data-ui'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MyMortgageBoutique | Home</title>
      </Helmet>
      <main>
        <section id='hero'>
          <Container maxWidth='xl'>
            <Grid container spacing={5} display='flex'>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    flexGrow: 1,
                  }}>
                  <Typography
                    variant='h1'
                    component='h2'
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: { xs: '1.2rem', md: '1.8rem' },
                      fontWeight: 700,
                      color: 'secondary.main',
                      wordSpacing: 5,
                      textAlign: { xs: 'center' },
                    }}>
                    MyMortgageBoutique, your bespoke mortgage provider
                  </Typography>
                  <br />
                  <Typography
                    variant='body1'
                    component='h6'
                    sx={{
                      fontFamily: 'Roboto',
                      textAlign: { xs: 'justify' },
                      fontSize: { xs: '0.8rem', md: '1.2rem' },
                      fontWeight: 400,
                      marginBottom: { xs: '1rem', md: '2rem' },
                      paddingTop: '1rem',
                      color: '#2b4257',
                    }}>
                    Tailored mortgage solutions for unique financial situations.
                    Trust us to achieve your dreams.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', paddingTop: '1rem' }}>
                  <Box marginRight={3}>
                    <button className='button-hero'>
                      <Link className='link-hero' to='solutions'>
                        Explore our solutions
                      </Link>
                    </button>
                  </Box>
                  <Box>
                    <button className='button-hero'>
                      <Link className='link-hero' to='case-studies'>
                        Browse our case studies
                      </Link>
                    </button>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={6}>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <img
                    src='../../assets/house_landing_page.png'
                    alt='mansion-image'
                    className='image'
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* =====KEY MESSAGES===== */}

        <section id='keymessages'>
          <Box
            sx={{
              backgroundColor: '#197288',
              display: { xs: 'none', md: 'flex' },
              marginTop: '3rem',
              borderTop: 'solid #14202e 1px',
              height: '100px',
            }}>
            <Container maxWidth='xl'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                }}>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 5,
                  }}>
                  <PaletteIcon sx={{ color: 'white', fontSize: 60 }} />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      component='span'
                      sx={{
                        fontSize: '1rem',
                        color: 'white',
                        marginLeft: 1,
                        paddinng: 0,
                      }}>
                      Flexible solutions
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      component='p'
                      sx={{ fontSize: '1rem', color: 'white', marginLeft: 1 }}>
                      for all stages of your life
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 5,
                  }}>
                  <HandshakeIcon sx={{ color: 'white', fontSize: 60 }} />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      component='span'
                      sx={{ fontSize: '1rem', color: 'white', marginLeft: 1 }}>
                      A personal and detailed approach
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      component='p'
                      sx={{ fontSize: '1rem', color: 'white', marginLeft: 1 }}>
                      to understand your situation
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                  }}>
                  <LightbulbIcon sx={{ color: 'white', fontSize: 60 }} />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      component='p'
                      sx={{ fontSize: '1rem', color: 'white', marginLeft: 1 }}>
                      Compelling solutions
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      component='p'
                      sx={{ fontSize: '1rem', color: 'white', marginLeft: 1 }}>
                      to adapt your needs
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </section>

        {/* ======CARDS===== */}
        <section className='cards'>
          <Container maxWidth='xl'>
            <Box sx={{ marginBottom: '3rem' }}>
              <Typography
                variant='subtitle2'
                component='h2'
                sx={{
                  fontSize: { xs: '1.4rem', md: '1.8rem' },
                  color: 'secondary.main',
                  fontWeight: 700,
                  textAlign: 'center',
                }}>
                How we can help
              </Typography>
              <div className='outline'></div>
            </Box>
            <Grid
              container
              spacing={3}
              sx={{ display: 'flex', justifyContent: 'center' }}>
              {cardText.map((card) => {
                return (
                  <Grid item xs={12} md={4} key={card.id}>
                    <HomeCard {...card} />
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </section>

        {/* ======MEET OUR EXPERTS====== */}

        <section id='experts'>
          <Container maxWidth='xl'>
            <Box sx={{ marginBottom: '3rem' }}>
              <Typography
                variant='subtitle2'
                component='h2'
                sx={{
                  fontSize: '1.8rem',
                  color: 'secondary.main',
                  fontWeight: 700,
                  textAlign: 'center',
                }}>
                Meet our experts
              </Typography>
              <div className='outline'></div>
            </Box>
            <Grid container spacing={3}>
              {cardExpert.map((expert) => {
                return (
                  <Grid item key={expert.id} xs={12} md={4}>
                    <CardExpert {...expert} />
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </section>

        {/* ====FAQ-ACCORDION==== */}
        <section id='faq-accordion'>
          <Container maxWidth='xl'>
            <Box>
              <Typography
                variant='body1'
                component='p'
                sx={{
                  textAlign: 'center',
                  padding: '1rem',
                }}>
                FAQs
              </Typography>
            </Box>
            <div className='outline'></div>
            <Box sx={{ width: '50%', display: 'flex', margin: 'auto' }}>
              <Accordion />
            </Box>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Home
