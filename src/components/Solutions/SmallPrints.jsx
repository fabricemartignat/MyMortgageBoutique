import React from 'react'

const SmallPrints = () => {
  return (
    <section className='disclaimers'>
      <p>
        <small>
          * The MyMortageBoutique Base Rate (“MMBBR”) is a Bank-defined rate
          that reflects our variable lending costs. These Base Rates are revised
          periodically.
        </small>
      </p>

      <small>
        {' '}
        <u>Things to consider</u>{' '}
      </small>
      <ul>
        <li>
          <small>
            Property is a high-risk, long-term investment, so it may not be
            suitable for everyone.
          </small>
        </li>
        <li>
          <small>
            If you borrow to buy an investment property and fail to keep up with
            the required payments, the property may be repossessed, or a
            receiver of rents appointed.
          </small>
        </li>
        <li>
          <small>
            Your home may be repossessed if you don’t keep up repayments on your
            home mortgage.
          </small>
        </li>
      </ul>
    </section>
  )
}

export default SmallPrints
