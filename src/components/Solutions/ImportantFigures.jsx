import React from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import { Box } from '@mui/material'

const ImportantFigures = ({ data, loanableValue, bridgeLoan }) => {
  const { rate_type, repayment_option, pricing, term } = data.pricing[0]
  const { base_rate } = data.baserate[0] // base rate fetched from useQuery

  // Amout to repay at maturity
  let amountToRepayAtMaturity
  if (repayment_option == 'interest only') {
    amountToRepayAtMaturity = Math.round(loanableValue).toLocaleString()
  } else {
    amountToRepayAtMaturity = 0
  }

  // Arrangement Fee
  let arrangementFee

  if (bridgeLoan) {
    arrangementFee = 0.02
  } else {
    arrangementFee = 0.005
  }
  const fee = Math.round(loanableValue * arrangementFee).toLocaleString()

  // Monthly Payment

  // All-in pricing: pricing + base rate of variable rate, only pricing for fixed rate

  const AllInPricing = rate_type === 'fixed' ? pricing : pricing + base_rate

  // monthly interest payment
  const monthlyInterestPayment = (loanableValue * AllInPricing) / (12 * 100)
  // monthly capital payment
  const monthlyCapitalPayment = loanableValue / term / 12

  // total monthly payment

  const totalMonthlyPayment =
    repayment_option === 'interest only'
      ? monthlyInterestPayment
      : monthlyInterestPayment + monthlyCapitalPayment

  const totalMonthlyPaymentFormatted =
    Math.round(totalMonthlyPayment).toLocaleString()

  return (
    <section className='importantfigures-container'>
      <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography align='center' sx={{ width: '100%', fontWeight: 500 }}>
            Important figures based on the maximum loanable value of your
            property
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginTop: '0', paddingTop: '0' }}>
          <Typography>
            <Box className='importantfigures-flex'>
              <Box className='importantfigures-section'>
                <p className='importantfigures-header'>Monthly Payment</p>
                <p className='importantfigures-figure'>
                  £{totalMonthlyPaymentFormatted}
                </p>
              </Box>

              <Box className='importantfigures-section'>
                <p className='importantfigures-header'>
                  Amount to repay at matuity
                </p>
                <p className='importantfigures-figure'>
                  £{amountToRepayAtMaturity}
                </p>
              </Box>

              <Box className='importantfigures-section'>
                <p className='importantfigures-header'>Arrangement Fee</p>
                <p className='importantfigures-figure'>£{fee}</p>
              </Box>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  )
}

export default ImportantFigures
