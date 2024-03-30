// Helmet component from react-helmet-async to manage title and meta tags
import { Helmet } from 'react-helmet-async'

import { Typography, Card, Button, IconButton } from '@mui/material'

import Grid from '@mui/material/Unstable_Grid2'

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

// card messages, card experts

import { cardText, cardExpert } from '../data-ui'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MyMortgageBoutique | Home</title>
      </Helmet>

      <section id='hero'>
        <Container maxWidth='xl'>
          <Box
            sx={{
              flexGrow: 1,
            }}>
            <Typography
              variant='h1'
              component='h2'
              sx={{
                fontFamily: 'Roboto',
                fontSize: { xs: '1.3rem', md: '2rem' },
                fontWeight: 700,
                paddingTop: '5rem',
                paddingBottom: '1rem',
                color: 'white',
                wordSpacing: 5,
                lineHeight: 1.5,
                textShadow: '2px 2px 4px #000000',
                textAlign: { xs: 'center', md: 'left' },
              }}>
              MyMortgageBoutique
              <br />
              Your bespoke mortgage provider
            </Typography>
            <div className='hero-outline' />
            <Typography
              variant='body1'
              component='h6'
              sx={{
                fontFamily: 'Roboto',
                textAlign: { xs: 'center', md: 'justify' },
                fontSize: { xs: '1rem', md: '1.3rem' },
                fontWeight: 400,
                marginBottom: { xs: '1rem', md: '2rem' },
                paddingTop: '1rem',
                color: 'white',
                // textShadow: '0px 1px 1px rgb(226, 226, 222)',
              }}>
              Tailored mortgage solutions for unique financial situations.
              <br />
              Trust us to achieve your dreams.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',

              paddingTop: '1rem',
            }}>
            <Box marginRight={5} marginTop={4}>
              <button className='button-hero'>
                <Link className='link-hero' to='solutions'>
                  Explore our solutions
                </Link>
              </button>
            </Box>
            <Box marginTop={4}>
              <button className='button-hero'>
                <Link className='link-hero' to='case-studies'>
                  Browse our case studies
                </Link>
              </button>
            </Box>
          </Box>
        </Container>
      </section>

      {/* =====KEY MESSAGES===== */}

      <section id='keymessages'>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },

            height: { xs: '0px', md: '100px' },
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
                <PaletteIcon
                  sx={{
                    color: '#14202e',

                    fontSize: 80,
                  }}
                />
                <Box>
                  <Typography
                    variant='subtitle1'
                    component='span'
                    sx={{
                      fontSize: '1.2rem',
                      color: '#14202e',
                      marginLeft: 1,
                      paddinng: 0,
                      fontWeight: 500,
                      textShadow: '1px 1px 1px rgb(226, 226, 222)',
                    }}>
                    Flexible solutions
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{
                      fontSize: '1.2rem',
                      color: '#14202e',
                      marginLeft: 1,
                      paddinng: 0,
                      fontWeight: 500,
                      textShadow: '1px 1px 1px rgb(226, 226, 222)',
                    }}>
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
                <HandshakeIcon sx={{ color: '#f39b04', fontSize: 80 }} />
                <Box>
                  <Typography
                    variant='subtitle1'
                    component='span'
                    sx={{
                      fontSize: '1.2rem',
                      color: '#14202e',
                      marginLeft: 1,
                      fontWeight: 500,
                      textShadow: '1px 1px 1px rgb(226, 226, 222)',
                    }}>
                    A personal and detailed approach
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{
                      fontSize: '1.2rem',
                      color: '#14202e',
                      marginLeft: 1,
                      fontWeight: 500,
                      textShadow: '1px 1px 1px rgb(226, 226, 222)',
                    }}>
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
                <LightbulbIcon sx={{ color: '#14202e', fontSize: 80 }} />
                <Box>
                  <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{
                      fontSize: '1.2rem',
                      color: '#14202e',
                      marginLeft: 1,
                      fontWeight: 500,
                      textShadow: '1px 1px 1px rgb(226, 226, 222)',
                    }}>
                    Compelling solutions
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{
                      fontSize: '1.2rem',
                      color: '#14202e',
                      marginLeft: 1,
                      fontWeight: 500,
                      textShadow: '1px 1px 1px rgb(226, 226, 222)',
                    }}>
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
          <div>
            <Box sx={{ marginBottom: '3rem' }}>
              <Typography
                variant='subtitle2'
                component='h2'
                sx={{
                  fontSize: { xs: '1.4rem', md: '1.8rem' },
                  color: 'secondary.main',
                  fontWeight: 700,
                  textAlign: 'center',
                  textShadow: '1px 1px 1px rgb(226, 226, 222)',
                }}>
                How we can help
              </Typography>
              <div className='outline'></div>
            </Box>
            <Grid
              container
              spacing={3}
              sx={{
                xs: {
                  display: 'flex',
                  justifyContent: 'center',
                },
              }}>
              {cardText.map((card) => {
                return (
                  <Grid xs={12} md={4} key={card.id}>
                    <HomeCard {...card} />
                  </Grid>
                )
              })}
            </Grid>
          </div>
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
                color: 'white',
                fontWeight: 700,
                textAlign: 'center',
              }}>
              Meet our experts
            </Typography>
            <div className='outline-expert'></div>
          </Box>
          <Grid container spacing={3} paddingBottom={6}>
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
                color: 'secondary.main',
              }}>
              Your Frequently Asked Questions
            </Typography>
          </Box>
          <div className='outline'></div>
          <Box
            sx={{
              MinWidth: '50%',
              display: 'flex',
              margin: 'auto',
            }}>
            <Accordion />
          </Box>
        </Container>
      </section>
    </>
  )
}

export default Home
