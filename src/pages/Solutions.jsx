// Helmet component from react-helmet-async to manage title and meta tags
import { Helmet } from 'react-helmet-async'

import { useState, useEffect } from 'react'
import FormSolution from '../components/Solutions/FormSolution'
import { Container, Grid, Typography } from '@mui/material'
import FormSolutionText from '../components/Solutions/FormSolutionText'
import FormSolutionResult from '../components/Solutions/FormSolutionResult'
import Box from '@mui/material/Box'

const Solutions = () => {
  //Toggle Button management
  const [alignment, setAlignment] = useState('')
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  //useState for form data, upstream data from FormSolution to use it in child component FormSolutionText and FormSolutionResult
  const [input, setInput] = useState({})
  const handleData = (input) => {
    setInput(input)
    console.log(input)
  }

  // Scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function resetForm() {
    setInput({})
    setAlignment('')
  }

  return (
    <>
      <Helmet>
        {' '}
        <title>MyMortgageBoutique | Solutions</title>{' '}
      </Helmet>
      <Container sx={{ marginTop: '8rem' }}>
        <Box sx={{ marginBottom: '1rem' }}>
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
            }}>
            Find your mortgage
          </Typography>

          <Typography
            variant='body1'
            component='p'
            sx={{
              fontSize: '1rem',
              fontWeight: 400,
              textAlign: { xs: 'justify', md: 'start' },
              padding: '1rem 0',
              textShadow: '1px 1px 1px rgb(226, 226, 222)',
            }}>
            This tool will enable you to calculate the loanable value of your
            property and find a suitable product and understand the cost of any
            borrowing.
            <br />
            It is designed to provide you with an indicative result and is not
            the provision of advice or a formal agreement to lend.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormSolution
              handleChange={handleChange}
              toggleValue={alignment}
              handleData={handleData}
              resetForm={resetForm}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormSolutionText
              propertyValue={input.propertyValue}
              repaymentOption={input.repaymentOptions}
              purpose={input.toggleValue}
              bridgeLoan={input.bridgeLoan}
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <FormSolutionResult input={input} />
      </Container>
    </>
  )
}

export default Solutions
