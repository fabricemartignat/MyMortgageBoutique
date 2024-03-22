import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function CardExpert({ name, title, src, text, alt }) {
  return (
    <Paper elevation={7}>
      <Card
        sx={{
          height: '27rem',

          textAlign: 'center',
          backgroundColor: '#fafafa',
          position: 'relative',
        }}>
        <CardMedia
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <img className='cardmedia' src={src} alt={alt} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            color='text.secondary'
            fontSize={20}>
            {title}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            fontSize={16}
            paddingTop={2}>
            {text}
          </Typography>
          <IconButton
            href='https://www.linkedin.com/in/fabrice-martignat/'
            target='_blank'
            rel='noreferrer'
            sx={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
            <LinkedInIcon sx={{ color: '#0072b1', fontSize: 25 }} />
          </IconButton>
        </CardContent>
      </Card>
    </Paper>
  )
}
