import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import Backdrop from '@mui/material/Backdrop'

import Fade from '@mui/material/Fade'

const options = [
  { value: 'purchase', label: 'Purchase' },
  { value: 'refinancing', label: 'Refinancing' },
  { value: 'Bridge', label: 'Bridge Finance' },
  { value: 'equity-release', label: 'Equity Release' },
  { value: 'other', label: 'Other' },
]

// Modal styling
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [option, setOption] = useState('')
  const [text, setText] = useState('')
  const [telephone, setTelephone] = useState('')

  // Modal function

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function handleSubmit(e) {
    e.preventDefault()
    handleOpen()
    setName('')
    setEmail('')
    setOption('')
    setText('')
    setTelephone('')
  }

  return (
    <>
      <Box
        component='form'
        sx={{ width: '100%' }}
        autoComplete='off'
        onSubmit={handleSubmit}>
        <div className='input-contact'>
          <TextField
            required
            fullWidth
            id='full-name'
            label='Full Name'
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className='input-contact'>
          <TextField
            required
            fullWidth
            id='email'
            label='Email Adress'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='input-contact'>
          <TextField
            required
            fullWidth
            id='phone'
            label='Phone Number'
            type='tel'
            onChange={(e) => setTelephone(e.target.value)}
            value={telephone}
          />
        </div>
        <div className='input-contact'>
          <TextField
            onChange={(e) => setOption(e.target.value)}
            select
            fullWidth
            label='Select'
            helperText='Enquiry type'
            value={option}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className='input-contact'>
          <TextField
            multiline
            required
            fullWidth
            label='Please tell us more'
            maxRows={10}
            placeholder='Enter your message here'
            id='message'
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{
            width: '20%',
            backgroundColor: ' #14202e',
            padding: '0.5rem',
            borderRadius: '5px',
            fontSize: '1rem',
            '&:hover': {
              color: '#f39b04',
            },
          }}>
          Submit
        </Button>
      </Box>
      {/*  Modal */}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Thank you for your enquiry
            </Typography>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              One of our advisors will be in touch shortly.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ContactForm
