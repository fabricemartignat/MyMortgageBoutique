import React from 'react'

import LoanableValueText from './LoanableValueText'

import { getLoanToValue } from '../../utilities'

import { Link } from 'react-router-dom'

const FormSolutionText = ({
  propertyValue,
  repaymentOption,
  purpose,
  bridgeLoan,
}) => {
  // placeholder text pending filling of the form and clicking on the submit button
  if (!propertyValue) {
    return (
      <div className='text-solution'>
        <div className='warning-text'>
          <h3>Important</h3>

          <p>
            This tool is designed to provide you with an indicative result and
            should not be taken as the provision of advice or a formal agreement
            to lend{' '}
          </p>
          <p>
            We do appreciate that you may have complex needs and we understand
            that this tool might not be able to fit your circumstances. If you
            are a client then please do contact your credit advisor to discuss
            any requirements you may have or if you do not have a relationship
            with us yet please contact us in order to understand in more detail
            the options that may be available to you.{' '}
          </p>
          <strong>
            Your home or property may be repossessed if you do not keep up
            repayments on your mortgage.
          </strong>
          <p>Credit is subject to status and approval.</p>
        </div>
      </div>
    )
  }

  //1-Remove commas from the property value data with replace

  const newPropertyValue = propertyValue.replace(/,/g, '')

  //2- Calculate the loanable value with the function loanToValue

  const ltv = getLoanToValue(Number(newPropertyValue), repaymentOption)
  const loanableValue = ltv * Number(newPropertyValue)

  // if property value is > 20m, then the loanable value is calculated on a case by case basis
  if (parseInt(newPropertyValue) > 20000000) {
    return (
      <div className='text-solution'>
        <div className='loanablevalue-text'>
          <p>We would be delighted to help you.</p>
          <p>
            For properties valued above £20m, our teams will run a detailed
            analysis to calculate the loanable value.
          </p>
          <p>Book an appointment to discuss with our experts</p>
        </div>
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

  return (
    <div className='text-solution'>
      {loanableValue < 500000 ? (
        <div className='decline-text'>
          <p>
            Sorry, our minimum lending is <strong>£500,000</strong>. There is
            not enough loanable value in your property to reach this amount.
          </p>
          <p>
            If you are an existing client, please contact your credit advisor.
          </p>
        </div>
      ) : (
        <LoanableValueText
          ltv={ltv}
          propertyValue={newPropertyValue}
          purpose={purpose}
          loanableValue={loanableValue}
          bridgeLoan={bridgeLoan}
        />
      )}
    </div>
  )
}

export default FormSolutionText
