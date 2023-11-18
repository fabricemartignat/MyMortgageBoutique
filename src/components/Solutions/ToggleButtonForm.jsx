import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

const ToggleButtonForm = ({ handleChange, toggleValue }) => {
  return (
    <ToggleButtonGroup
      aria-label='purpose'
      sx={{
        fontWeight: '700',
        '& .Mui-selected': {
          backgroundColor: '#14202e !important',
          color: '#ffff !important',
        },
      }}
      color='primary'
      value={toggleValue}
      exclusive
      onChange={handleChange}>
      <ToggleButton value='purchase' aria-label='purchase'>
        Purchase
      </ToggleButton>
      <ToggleButton aria-label='remortgage' value='remortgage'>
        Remortgage
      </ToggleButton>
      <ToggleButton aria-label='release' value='equity-release'>
        Equity Release
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleButtonForm
