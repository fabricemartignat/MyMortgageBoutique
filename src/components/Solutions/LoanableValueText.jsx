import React from 'react'

import { Link } from 'react-router-dom'

const LoanableValueText = ({
  propertyValue,
  loanableValue,
  purpose,
  ltv,
  bridgeLoan,
}) => {
  const deposit = parseInt(propertyValue) - parseInt(loanableValue)

  if (bridgeLoan) {
    return (
      <div className='loanablevalue-text'>
        <h3>Good news!</h3>

        <p>
          Our short-term finance solutions are perfect to help you bridge the
          gap in your financing needs.
        </p>

        <p>
          Based on your property value, we can lend you up to
          <strong> £{Math.round(loanableValue).toLocaleString()}</strong>.
        </p>
        <p>
          This corresponds to a loan to value of <strong>{ltv * 100}%</strong>.
        </p>

        <p>
          All you need to do is to browse our products and book an appointment.
        </p>
        <div className='button-container'>
          <button className='button-solution'>
            <Link className='link-solution' to='/contact-us'>
              book an appointment
            </Link>
          </button>
        </div>
      </div>
    )
  }

  if (purpose === 'purchase') {
    return (
      <>
        <div className='loanablevalue-text'>
          <h3>Good news!</h3>

          <p>
            Based on your property value, we can lend you up to
            <strong> £{Math.round(loanableValue).toLocaleString()}</strong> for
            your purchase.
          </p>
          <p>
            This corresponds to a loan to value of <strong>{ltv * 100}%</strong>
            .
          </p>
          <p>You will need a deposit of £{deposit.toLocaleString()}.</p>
          <p>
            All you need to do is to browse our products and book an
            appointment.
          </p>
        </div>
        <div className='button-container'>
          <button className='button-solution'>
            <Link className='link-solution' to='/contact-us'>
              book an appointment
            </Link>
          </button>
        </div>
      </>
    )
  } else if (purpose === 'remortgage') {
    return (
      <>
        <div className='loanablevalue-text'>
          <h3>Good news!</h3>

          <p>
            Based on your property value, we can lend you up to
            <strong> £{Math.round(loanableValue).toLocaleString()}</strong> to
            refinance your existing mortgage.
          </p>
          <p>
            This corresponds to a loan to value of <strong>{ltv * 100}%</strong>
            .
          </p>
          <p>
            All you need to do is to browse our products and book an
            appointment.
          </p>
        </div>
        <div className='button-container'>
          <button className='button-solution'>
            <Link className='link-solution' to='/contact-us'>
              book an appointment
            </Link>
          </button>
        </div>
      </>
    )
  } else if (purpose === 'equity-release') {
    return (
      <>
        <div className='loanablevalue-text'>
          <h3>Good news!</h3>

          <p>
            Based on your property value, we can lend you up to
            <strong> £{Math.round(loanableValue).toLocaleString()}</strong>{' '}
            against your property.
          </p>
          <p>
            This corresponds to a loan to value of <strong>{ltv * 100}%</strong>
            .
          </p>
          <p>
            All you need to do is to browse our products and book an
            appointment.
          </p>
        </div>
        <div className='button-container'>
          <button className='button-solution'>
            <Link className='link-solution' to='/contact-us'>
              book an appointment
            </Link>
          </button>
        </div>
      </>
    )
  }
}

export default LoanableValueText
