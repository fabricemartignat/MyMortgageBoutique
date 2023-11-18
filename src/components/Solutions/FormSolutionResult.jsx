import { useQuery } from '@apollo/client'

import { GET_PRICING } from '../../queries/productQueries'

import { getLoanToValue } from '../../utilities'

import TableResults from '../../components/Solutions/TableResults'
import Error from '../../components/Error'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const FormSolutionResult = ({ input }) => {
  const { rateType, repaymentOptions, term, propertyValue, bridgeLoan } = input

  const { loading, error, data } = useQuery(GET_PRICING, {
    variables: {
      rate_type: rateType,
      repayment_option: repaymentOptions,
      term: term,
    },
  })

  console.log(data)

  if (!propertyValue) return

  if (error) return <Error link='/' />

  if (loading)
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <CircularProgress size={80} />
      </Box>
    )
  else {
    //Calculate the loanaable value of the property. If < 500000 or propery value is > £20m don't show anything

    //1-Remove commas from the property value data with replace

    const newPropertyValue = propertyValue.replace(/,/g, '')

    //2- Calculate the loanable value with the function loanToValue

    const ltv = getLoanToValue(Number(newPropertyValue), repaymentOptions)
    const loanableValue = ltv * Number(newPropertyValue)

    if (loanableValue < 500000 || newPropertyValue > 20000000) return

    return (
      <div className='result-solution'>
        <TableResults
          data={data}
          loanableValue={loanableValue}
          bridgeLoan={bridgeLoan}
        />
      </div>
    )
  }
}

export default FormSolutionResult
