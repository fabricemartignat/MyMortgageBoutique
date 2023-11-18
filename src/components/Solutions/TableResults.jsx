import React from 'react'

import SmallPrints from './SmallPrints'
import ImportantFigures from './ImportantFigures'

const TableResults = ({ data, loanableValue, bridgeLoan }) => {
  let arrangementFee

  if (bridgeLoan || data.pricing[0].term === 1) {
    arrangementFee = '2%'
  } else {
    arrangementFee = '0.5%'
  }

  // data extraction from the query to use in the table

  const rateType = data.pricing[0].rate_type
  const term = data.pricing[0].term
  const rate = data.pricing[0].pricing.toFixed(2)

  // splitting the features string by sentences into an array and then mapping it to a list so that it is displayed in a list of features in the table. FOR FORMATTING PURPOSES ONLY
  const features = data.pricing[0].pricing_product_feature.features
  const featuresArray = features.split('. ')
  const featuresList = featuresArray.map((feature, index) => {
    return <li key={index}>{feature}</li>
  })

  return (
    <div>
      <p>
        Based on your criteria, we have selected the following product for you
      </p>
      <section>
        <table>
          <thead>
            <tr>
              <th>Rate Type</th>
              <th>Term</th>
              <th>Rate</th>
              <th>Arrangement Fee</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='rate-type'>{rateType}</td>
              <td>
                {term} {term > 1 ? 'Years' : 'Year'}
              </td>
              <td>
                {rate}%{' '}
                {rateType === 'fixed' ? (
                  <span className='rate'>all-in</span>
                ) : (
                  <span className='rate'>over MMB base rate*</span>
                )}
              </td>
              <td>{arrangementFee}</td>
              <td className='text-features'>{featuresList}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <ImportantFigures
        data={data}
        loanableValue={loanableValue}
        bridgeLoan={bridgeLoan}
      />

      <SmallPrints />
    </div>
  )
}

export default TableResults
