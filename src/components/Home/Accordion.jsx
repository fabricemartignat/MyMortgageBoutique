import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography fontWeight={500}>
            What duration options are available for mortgages terms through
            MyMortgageBoutique?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='justify'>
            MyMortgageBoutique offers flexible options for allowing clients to
            choose a duration that aligns with their financial goals. Our
            mortgages can be taken over a term of 1 to 15 years.
            <br />
            Certain products may be available on a shorter term. During the
            application process, our team will work closely with you to
            determine the most suitable term.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography fontWeight={500}>
            What can I use my mortgage for?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='justify'>
            Our financing solutions are primarily designed to facilitate the
            acquisition or re-financing of residential properties. For clients
            considering re-mortgaging or seeking additional funds, our mortgages
            can be strategically employed for various purposes, such as:
            <ul>
              <li>
                Acquiring residential property internationally (secured by UK
                property)
              </li>
              <li>
                Undertaking enhancements on the primary residence or a second
                home
              </li>
              <li>
                Unlocking equity for specific long-term financial objectives
              </li>
            </ul>
            It's important to note that this list is not exhaustive, and we
            meticulously evaluate each client application on a case-by-case
            basis to ensure tailored solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography fontWeight={500}>
            Does MyMortgageBoutique provide mortgages to non-UK residents?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='justify'>
            Absolutely, we are open to considering your application for a
            mortgage even if you are not a UK resident or if your income or
            assets are derived from a currency other than Sterling.
            <br />
            For detailed information tailored to your situation, we recommend
            reaching out to your dedicated Private Banker who can provide
            personalized guidance."
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography fontWeight={500}>
            Will my mortgage be secured on my property?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='justify'>
            Yes, If you are taking out one of our mortgage products, we require
            security over a property. In England and Wales this is done by you
            granting a Mortgage Deed in our favour over the property and in
            Scotland this is done by you granting a Standard Security in our
            favour over the property.
            <br />
            It is important to note that we exclusively offer mortgages secured
            by properties located in England, Wales, or Scotland.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'>
          <Typography fontWeight={500}>
            Do I need to have building insurance?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign='justify'>
            Yes, if you are offering a property as security, it is a mandatory
            requirement to maintain suitable buildings insurance for that
            property throughout the mortgage term. We request confirmation of
            this coverage.
            <br />
            While you are not obligated to purchase this insurance from us, it
            is crucial to note that the absence of buildings insurance would
            constitute a breach of the terms outlined in your mortgage
            agreement.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
