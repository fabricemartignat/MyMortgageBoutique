// Helmet component from react-helmet-async to manage title and meta tags
import { Helmet } from 'react-helmet-async'

import React from 'react'
import ContactForm from '../components/ContactUs/ContactForm'

import Container from '@mui/material/Container'
import { Grid, Typography, Box } from '@mui/material'

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>MyMortgageBoutique | Contact Us</title>
      </Helmet>
      <section className='contact-form'>
        <Container maxWidth='xl'>
          <Box sx={{ marginBottom: '2rem' }}>
            <Typography
              variant='subtitle2'
              component='h2'
              sx={{
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                color: 'secondary.main',
                fontWeight: 700,
                textAlign: 'start',
                borderBottom: 'solid #f39b04 5px',
                width: 'fit-content',
                marginTop: '8rem',
              }}>
              Book an Appointment
            </Typography>

            <Typography
              variant='body1'
              component='p'
              sx={{
                fontSize: '1rem',
                fontWeight: 300,
                textAlign: 'start',
                padding: '1rem 0',
                textShadow: '1px 1px 1px rgb(226, 226, 222)',
              }}>
              Fill in your details and we'll be in touch soon
            </Typography>
          </Box>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant='h6' component='p' gutterBottom>
                  MyMortageBoutique
                </Typography>
                <Typography
                  variant='body1'
                  component='p'
                  gutterBottom
                  fontWeight={500}
                  fontSize={20}>
                  Address: <span>17 basevi way London, UK</span>
                </Typography>
                <Typography
                  variant='body1'
                  component='p'
                  gutterBottom
                  fontWeight={500}
                  fontSize={20}>
                  Telephone: <span>+44 756 509 8765</span>
                </Typography>
              </Box>
              <Box sx={{ marginTop: '2rem' }}>
                <iframe
                  style={{
                    width: '600px',
                    height: '400px',
                    border: '0',
                    allowfullscreen: '',
                    loading: 'lazy',
                    referrerpolicy: 'no-referrer-when-downgrade',
                  }}
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.677949141194!2d-0.023321386685706734!3d51.48242547169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876028d77fcb7f7%3A0x726107b2147b4408!2sBasevi%20Way%2C%20London%20SE8%203JS!5e0!3m2!1sen!2suk!4v1680717270065!5m2!1sen!2suk'></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default ContactUs
