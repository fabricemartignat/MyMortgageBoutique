// helper function to calculate the LTV

// switch statement to detemine the LTV according to the property value and the repayment option

export function getLoanToValue(propertyValue, repaymentOption) {
  switch (true) {
    case propertyValue < 5000000 && repaymentOption === 'interest only':
      return 0.8
      break
    case propertyValue < 5000000 && repaymentOption === 'capital repayment':
      return 0.9
      break
    case propertyValue >= 5000000 &&
      propertyValue < 10000000 &&
      repaymentOption === 'interest only':
      return 0.75
      break
    case propertyValue >= 5000000 &&
      propertyValue < 10000000 &&
      repaymentOption === 'capital repayment':
      return 0.85
      break
    case propertyValue >= 10000000 &&
      propertyValue < 15000000 &&
      repaymentOption === 'interest only':
      return 0.7
      break
    case propertyValue >= 10000000 &&
      propertyValue < 15000000 &&
      repaymentOption === 'capital repayment':
      return 0.8
      break
    case propertyValue >= 15000000 &&
      propertyValue < 20000000 &&
      repaymentOption === 'interest only':
      return 0.65
      break
    case propertyValue >= 15000000 &&
      propertyValue < 20000000 &&
      repaymentOption === 'capital repayment':
      return 0.75
      break
    default:
      return 'Please enter a valid property value and repayment option'
  }
}
