import React from 'react'
import ToggleButtonForm from '../Solutions/ToggleButtonForm'
import {
  TextField,
  Button,
  FormControlLabel,
  Box,
  Typography,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import InputAdornment from '@mui/material/InputAdornment'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// import { object, string, number, date } from 'yup'

const schema = yup.object({
  propertyValue: yup.string().required(),
  term: yup.number().min(1).max(15).integer().required(),
  rateType: yup.string().required(),
  repaymentOptions: yup.string().required(),
})

const rateOptions = [
  { value: 'fixed', label: 'Fixed' },
  { value: 'variable', label: 'Variable' },
]

const repaymentOptions = [
  { value: 'interest only', label: 'Interest Only' },
  { value: 'capital repayment', label: 'Capital Repayment' },
]

function FormSolution(props) {
  const [toggleValueError, setToggleValueError] = React.useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      bridgeLoan: false,
      propertyValue: '',
      term: '',
      rateType: '',
      repaymentOptions: '',
    },
    resolver: yupResolver(schema),
  })

  // watch to check if bridge loan is selected-If yes, then only variable rate, 1 year and interest only are available in the form.

  const bridgeLoan = watch('bridgeLoan')

  const { toggleValue, handleData, resetForm } = props

  const onSubmit = (input) => {
    if (!toggleValue) setToggleValueError(true)
    else {
      const formParams = { toggleValue: toggleValue, ...input }

      handleData(formParams)

      setToggleValueError(false)
    }
  }

  //reset form
  function handleResetForm() {
    resetForm()
    setToggleValueError(false)

    reset()
  }

  //format property value with thousand separator

  function formattedPropertyValue(e) {
    const value = e.target.value

    const formattedValue = value
      .replace(/\D/g, '') // clean string from letters
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') // format to thousands separator
    return formattedValue
  }

  return (
    <div className='form-solution'>
      <Typography marginBottom={'1rem'}>Purpose of the mortgage</Typography>
      <ToggleButtonForm {...props} />

      {toggleValueError && (
        <p style={{ color: 'red', marginBottom: 0 }}>
          Please select a purpose of the mortgage
        </p>
      )}

      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='bridgeLoan'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <FormControlLabel
              sx={{ color: 'secondary', marginLeft: '0' }}
              control={
                <Checkbox
                  {...field}
                  color='primary'
                  checked={field['value'] ?? false} // need to add this line to fix some issues with the MUI Checkbox when the form is reset
                  onClick={(e) => {
                    setValue('term', '1')
                    setValue('rateType', 'variable')
                    setValue('repaymentOptions', 'interest only')
                  }}
                />
              }
              label='I need short-term finance'
              labelPlacement='start'
            />
          )}
        />
        <Controller
          name='propertyValue'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Property Value'
              type='text'
              value={field.value}
              variant='outlined'
              onChange={(e) => {
                const formattedValue = formattedPropertyValue(e)
                field.onChange(formattedValue)
                field.onBlur(formattedValue) // add this line to fix some issues with the MUI TextField
              }}
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position='end'>£</InputAdornment>,
              }}
              size='small'
              margin='normal'
              error={!!errors.propertyValue}
              helperText={
                errors.propertyValue
                  ? 'Property value must be a positive number'
                  : ''
              }
            />
          )}
        />
        <Controller
          name='term'
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <TextField
              {...field}
              label='Term of the loan'
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    {bridgeLoan ? 'Year' : 'Years'}
                  </InputAdornment>
                ),
              }}
              fullWidth
              size='small'
              margin='normal'
              error={!bridgeLoan && !!errors.term}
              helperText={
                errors.term ? 'The term must be between 1 and 15 years' : ''
              }
              value={bridgeLoan ? 1 : field.value}
            />
          )}
        />

        <Controller
          name='rateType'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              select
              label=' Select a rate Type'
              fullWidth
              size='small'
              margin='normal'
              error={!bridgeLoan && !!errors.rateType}
              helperText={errors.rateType ? 'Please select a rate type' : ''}
              value={bridgeLoan ? 'variable' : field.value}>
              {rateOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name='repaymentOptions'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              select
              fullWidth
              label=' Select a repayment option'
              size='small'
              margin='normal'
              error={!bridgeLoan && !!errors.repaymentOptions}
              helperText={
                errors.repaymentOptions
                  ? 'Please select a repayment option'
                  : ''
              }
              value={bridgeLoan ? 'interest only' : field.value}>
              {repaymentOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <br />
        <br />
        <Box display={'flex'} justifyContent={'center'}>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            sx={{
              width: '50%',
              backgroundColor: ' rgb(20, 32, 46)',
              padding: '0.5rem',
              borderRadius: '5px',
              fontSize: '1rem',
              marginTop: '1rem',
              '&:hover': {
                backgroundColor: 'rgb(5, 42, 83)',
                color: '#f39b04',
              },
            }}>
            SHOW RESULTS
          </Button>
        </Box>
      </form>

      <Box display={'flex'} justifyContent={'center'}>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{
            minWidth: '30%',
            backgroundColor: ' #14202e',
            padding: '0.5rem',
            borderRadius: '5px',
            fontSize: '0.8rem',
            marginTop: '2rem',
            '&:hover': {
              backgroundColor: 'rgb(200, 54, 54)',
            },
          }}
          onClick={() => handleResetForm()}>
          RESET FORM
        </Button>
      </Box>
    </div>
  )
}

export default FormSolution
